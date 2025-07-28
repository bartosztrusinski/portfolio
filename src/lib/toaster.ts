type ToastVariation = 'success' | 'error' | 'default';

type ToastPosition = {
  y: 'top' | 'bottom';
  x: 'left' | 'center' | 'right';
};
type ToastVariations = Record<ToastVariation, { classes: string[]; icon: string }>;

const DEFAULT_MOBILE_BREAKPOINT = 640;
const DEFAULT_DISPLAY_DURATION = 5000;

const TOAST_VARIATIONS: ToastVariations = {
  default: {
    classes: ['text-slate-800', 'bg-slate-50', 'border-slate-200'],
    icon: 'ℹ️',
  },
  success: {
    classes: ['text-green-500', 'bg-green-100', 'border-green-200'],
    icon: '✅',
  },
  error: {
    classes: ['text-red-500', 'bg-red-100', 'border-red-200'],
    icon: '❌',
  },
};

const TOAST_POSITION_CLASSES: Record<ToastPosition['x'] | ToastPosition['y'], string[]> = {
  top: ['top-3'],
  bottom: ['bottom-3'],
  left: ['left-3'],
  right: ['right-3'],
  center: ['left-1/2', '-translate-x-1/2'],
};

const TOAST_CLASSES = [
  'fixed',
  'w-full',
  'max-w-[min(100%-2rem,24rem)]',
  'text-wrap',
  'rounded-md',
  'border',
  'px-5',
  'py-3',
  'font-medium',
  'shadow-xl',
  'z-50',
  'transition-transform',
  'motion-reduce:transition-none',
  'duration-500',
  'ease-bounce',
  'translate-y-[var(--translate)]',
];

type ToasterOptions = {
  position: ToastPosition;
  mobilePosition?: ToastPosition;
  mobileBreakpoint?: number;
  duration?: number;
};

class Toaster extends Function {
  private toast: HTMLElement;
  private timeoutId = 0;
  private duration: number;

  public constructor({ position, duration, mobileBreakpoint, mobilePosition }: ToasterOptions) {
    // Extend Function class and use Proxy to make instance callable
    super('...args', 'return this.showToast(...args)');

    this.toast = this.initElement();
    this.duration = duration ?? DEFAULT_DISPLAY_DURATION;

    if (mobilePosition) {
      this.handleResize(position, mobilePosition, mobileBreakpoint ?? DEFAULT_MOBILE_BREAKPOINT);
    } else {
      this.positionToast(position);
    }

    this.hidden = true;

    const callableInstance = new Proxy(this, {
      apply: (target, _, args: Parameters<typeof this.showToast>) => target.showToast(args[0]),
    });

    return callableInstance;
  }

  public success(message: string) {
    return this.showToast(message, 'success');
  }

  public error(message: string) {
    return this.showToast(message, 'error');
  }

  private initElement(): HTMLDivElement {
    const toastEl = document.createElement('div');
    toastEl.classList.add(...TOAST_CLASSES);
    document.body.appendChild(toastEl);

    return toastEl;
  }

  private handleResize(
    originalPosition: ToastPosition,
    mobilePosition: ToastPosition,
    breakpoint: number,
  ) {
    const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);

    mediaQueryList.addEventListener('change', (event) => {
      // Temporarily disable transition to avoid flicker
      this.toast.style.transition = 'none';
      this.toast.style.opacity = '0';

      this.positionToast(event.matches ? mobilePosition : originalPosition);

      // Force reflow to apply the new position without transition
      this.toast.offsetWidth;
      this.toast.style.transition = '';
      this.toast.style.opacity = '1';
    });

    this.positionToast(mediaQueryList.matches ? mobilePosition : originalPosition);
  }

  private positionToast({ y, x }: ToastPosition) {
    const allPositionClasses = Object.values(TOAST_POSITION_CLASSES).flat();

    this.toast.classList.remove(...allPositionClasses);
    this.toast.classList.add(...TOAST_POSITION_CLASSES[y], ...TOAST_POSITION_CLASSES[x]);
    this.toast.style.setProperty('--translate', y === 'top' ? '-200%' : '200%');
  }

  private showToast(message: string, variation: ToastVariation = 'default') {
    const { classes, icon } = TOAST_VARIATIONS[variation];
    window.clearTimeout(this.timeoutId);

    this.removeVariationClasses();
    this.message = `${icon} ${message}`;
    this.hidden = false;
    this.toast.classList.add(...classes);
    this.timeoutId = window.setTimeout(() => {
      this.hidden = true;
    }, this.duration);
  }

  private set message(value: string) {
    this.toast.textContent = value;
  }

  private set hidden(value: boolean) {
    this.toast.classList.toggle('translate-y-[var(--translate)]', value);
  }

  private removeVariationClasses() {
    const allVariationClasses = Object.values(TOAST_VARIATIONS).flatMap(({ classes }) => classes);
    this.toast.classList.remove(...allVariationClasses);
  }
}

export const toast = new Toaster({
  position: { y: 'bottom', x: 'right' },
  mobilePosition: { y: 'top', x: 'center' },
});
