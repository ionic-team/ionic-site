declare var grecaptcha: any;

export const recaptcha = async (action = 'signup') => {
  if(typeof grecaptcha === 'undefined' || typeof grecaptcha.execute === 'undefined') {
    return
  }

  return grecaptcha.execute('6LfbcKAUAAAAACUDq_t59TP8MawQXB37DVEeSOjZ', { action })
}