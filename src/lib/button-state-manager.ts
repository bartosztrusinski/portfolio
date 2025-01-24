type ButtonState = 'default' | 'loading';

type ButtonStateValues = Record<
  ButtonState,
  {
    text: string;
    disabled: boolean;
  }
>;

const DEFAULT_STATE_VALUES: ButtonStateValues = Object.freeze({
  default: {
    text: 'Submit',
    disabled: false,
  },
  loading: {
    text: 'Loading...',
    disabled: true,
  },
});

export function useButtonStateManager(btn: HTMLButtonElement, loadingText?: string) {
  return new Button(btn, loadingText);
}

export class Button {
  private btn: HTMLButtonElement;
  private stateValues: ButtonStateValues = DEFAULT_STATE_VALUES;

  constructor(btn: HTMLButtonElement, loadingText?: string) {
    this.btn = btn;
    this.stateValues.default.text = this.text ?? this.stateValues.default.text;
    this.stateValues.loading.text = loadingText ?? this.stateValues.loading.text;
  }

  private get text() {
    return this.btn.textContent ?? '';
  }

  private set text(value: string) {
    this.btn.textContent = value.trim();
  }

  private disable() {
    this.btn.setAttribute('disabled', 'true');
  }

  private enable() {
    this.btn.removeAttribute('disabled');
  }

  setState(state: ButtonState) {
    const newState = this.stateValues[state];
    this.text = newState.text;
    newState.disabled ? this.disable() : this.enable();
  }
}
