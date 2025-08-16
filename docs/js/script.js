const AFFILIATE_TAG = "davblog-21";

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('year').textContent = new Date().getFullYear();

  // Wire the main CTA and any other Amazon buttons
  AmazonStore.enhanceAll({ tag: AFFILIATE_TAG });
  AmazonStore.renderStoreGridAll({ tag: AFFILIATE_TAG });
});

