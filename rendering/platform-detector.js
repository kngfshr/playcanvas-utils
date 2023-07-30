/**
 * Useful functions when you want to detect certain device compatibilities
 */

function isDeviceLowSpec() {
  const renderer =
    pc.Application.getApplication().graphicsDevice.unmaskedRenderer;

  console.debug({ renderer });

  if (!renderer) {
    console.error('No renderer found');
  }

  // Only check the GPU if we are on mobile
  if (renderer && pc.platform.mobile) {
    if (isPlatformIOS()) {
      return true;
    }
    // low level GPUs
    if (
      renderer.search(/Adreno\D*3/) !== -1 ||
      renderer.search(/Adreno\D*4/) !== -1 ||
      renderer.search(/Adreno\D*505/) !== -1 ||
      renderer.search(/Adreno\D*506/) !== -1 ||
      renderer.search(/Mali\D*4/) !== -1 ||
      renderer.search(/Mali\D*5/) !== -1 ||
      renderer.search(/Mali\D*6/) !== -1 ||
      renderer.search(/Mali\D*T7/) !== -1 ||
      renderer.search(/Mali\D*T82/) !== -1 ||
      renderer.search(/Mali\D*T83/) !== -1
    ) {
      return true;
    }
  }

  return false;
}

function isPlatformMobile() {
  return !!pc.Application.getApplication().touch;
}

function isPlatformIOS() {
  // https://erikmartinjordan.com/navigator-platform-deprecated-alternative
  const platform =
    navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}
