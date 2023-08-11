var UIPassword = pc.createScript('uiPassword');

UIPassword.attributes.add('mainScreen', { type: 'entity' });
UIPassword.attributes.add('inputField', { type: 'entity' });

// Generated with https://developer.mozilla.org/en-US/docs/Web/API/btoa
const encrypted = '';

// initialize code called once per entity
UIPassword.prototype.initialize = function () {
  this.mainScreen.enabled = false;
  this.input = this.inputField.script.input;
};

UIPassword.prototype.update = function () {
  const password = this.input.getValue();
  if (password) {
    if (btoa(password) === encrypted) {
      this.onSuccess();
    }
  }
};

UIPassword.prototype.onSuccess = function () {
  this.mainScreen.enabled = true;
  this.entity.enabled = false;
  this.input.removeElement();
};
