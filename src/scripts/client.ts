const menu = document.querySelector<HTMLDetailsElement>('.mobile-menu');
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.open) {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});
document.addEventListener('click', (event) => {
  if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
});

let toastTimer: ReturnType<typeof setTimeout>;
function showMessage(text: string) {
  const status = document.querySelector<HTMLElement>('#copy-status');
  if (!status) return;
  status.textContent = text;
  status.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => status.classList.remove('is-visible'), 4000);
}

document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const text = button.dataset.copy || '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      showMessage('주소를 복사했습니다. 지도 앱에 붙여넣어 주세요.');
    } catch {
      const address = document.querySelector('[data-address]');
      if (address) {
        const range = document.createRange();
        range.selectNodeContents(address);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      showMessage('주소를 선택했습니다. 길게 누르거나 복사 단축키로 복사해 주세요.');
    }
  });
});

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((gallery) => {
  const dialog = gallery.querySelector<HTMLDialogElement>('dialog');
  const image = gallery.querySelector<HTMLImageElement>('[data-gallery-image]');
  const count = gallery.querySelector<HTMLElement>('[data-gallery-count]');
  const caption = gallery.querySelector<HTMLElement>('[data-gallery-caption]');
  if (!dialog || !image || !count || !caption) return;
  const items: { src: string; alt: string }[] = JSON.parse(gallery.dataset.items || '[]');
  let index = 0;
  let opener: HTMLElement | null = null;
  const update = (next: number) => {
    index = (next + items.length) % items.length;
    image.src = items[index].src;
    image.alt = items[index].alt;
    count.textContent = `${index + 1} / ${items.length}`;
    caption.textContent = items[index].alt;
  };
  gallery.querySelectorAll<HTMLAnchorElement>('.gallery-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = trigger;
      update(Number(trigger.dataset.index));
      dialog.showModal();
      document.body.classList.add('gallery-open');
      dialog.querySelector<HTMLButtonElement>('[data-gallery-close]')?.focus();
    });
  });
  gallery.querySelector('[data-gallery-close]')?.addEventListener('click', () => dialog.close());
  gallery.querySelector('[data-gallery-prev]')?.addEventListener('click', () => update(index - 1));
  gallery.querySelector('[data-gallery-next]')?.addEventListener('click', () => update(index + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      update(index - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      update(index + 1);
    }
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('gallery-open');
    opener?.focus();
  });
});

// Old public Angular URLs used hashes; no server can see that fragment.
const legacyHashes: Record<string, string> = {
  '/landing': '/',
  '/home': '/',
  '/room': '/rooms/',
  '/food': '/dining/',
  '/location': '/visit/',
  '/story': '/valley/',
  '/booking-food': '/dining/',
};
if (location.pathname === '/' && location.hash.startsWith('#/')) {
  const destination = legacyHashes[location.hash.slice(1).split('?')[0].replace(/\/$/, '')];
  if (destination) location.replace(destination);
}
