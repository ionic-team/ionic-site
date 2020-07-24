export const recaptcha = async (action = 'signup') => {
  if (typeof window.grecaptcha === 'undefined' || typeof window.grecaptcha.execute === 'undefined') {
    return;
  }

  return window.grecaptcha.execute('6LfbcKAUAAAAACUDq_t59TP8MawQXB37DVEeSOjZ', { action });
};
