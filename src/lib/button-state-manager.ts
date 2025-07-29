type ButtonState = 'default' | 'loading';

type ButtonStateValues = Record<ButtonState, { text: string; disabled: boolean }>;

const DEFAULT_STATE_VALUES: ButtonStateValues = {
  default: { text: 'Submit', disabled: false },
  loading: { text: 'Loading...', disabled: true },
};

export class ButtonStateManager {
  private button: HTMLButtonElement;
  private stateValues: ButtonStateValues = DEFAULT_STATE_VALUES;

  constructor(buttonElement: HTMLButtonElement, loadingText?: string) {
    this.button = buttonElement;
    this.stateValues.default.text = this.text ?? this.stateValues.default.text;
    this.stateValues.loading.text = loadingText ?? this.stateValues.loading.text;
  }

  private get text() {
    return this.button.textContent ?? '';
  }

  private set text(value: string) {
    this.button.textContent = value.trim();
  }

  private disable() {
    this.button.setAttribute('disabled', 'true');
  }

  private enable() {
    this.button.removeAttribute('disabled');
  }

  public setState(state: ButtonState) {
    const newState = this.stateValues[state];
    this.text = newState.text;
    newState.disabled ? this.disable() : this.enable();
  }
}
