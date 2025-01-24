type ToastType = 'success' | 'error' | 'default';

type ToastTypeValues = Record<
  ToastType,
  {
    classes: string;
  }
>;

const DEFAULT_TYPE_VALUES: ToastTypeValues = Object.freeze({
  default: {
    classes: 'text-slate-600',
  },
  success: {
    classes: 'text-green-500',
  },
  error: {
    classes: 'text-red-500',
  },
});

export class Toast extends Function {
  private toast: HTMLElement;
  private typeValues: ToastTypeValues = DEFAULT_TYPE_VALUES;
  private timeoutId = 0;
  private displayDurationMs = 5000;

  constructor(toast: HTMLElement) {
    // Extend Function class and use Proxy to make instance callable
    super('...args', 'return this.showToast(...args)');

    const callableInstance = new Proxy(this, {
      apply: (target, _, args: Parameters<typeof this.showToast>) => {
        return target.showToast(args[0]);
      },
    });

    this.toast = toast;
    this.hidden = true;

    return callableInstance;
  }

  private set message(value: string) {
    this.toast.textContent = value;
  }

  private set hidden(value: boolean) {
    this.toast.classList.toggle('hidden', value);
  }

  private removeTypeClasses() {
    const allTypeClasses = Object.values(this.typeValues)
      .map((type) => type.classes)
      .filter(Boolean);
    this.toast.classList.remove(...allTypeClasses);
  }

  private showToast(message: string, type: ToastType = 'default') {
    const typeValues = this.typeValues[type];
    window.clearTimeout(this.timeoutId);

    this.message = message;
    this.hidden = false;
    this.removeTypeClasses();
    this.toast.classList.add(typeValues.classes);
    this.timeoutId = window.setTimeout(() => (this.hidden = true), this.displayDurationMs);
  }

  success(message: string) {
    return this.showToast(message, 'success');
  }

  error(message: string) {
    return this.showToast(message, 'error');
  }
}
