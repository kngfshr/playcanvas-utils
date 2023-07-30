/**
 * Rotates an object non-stop, with a defined speed <x, y, z> vector. Examples:
 * <0, 1, 0> rotates the object horizontally with a speed of 1
 * <10, 1, 0> rotates the object horizontally with a speed of 1, and vertically with a speed of 10
 * <0, 0, 20> rotates the object sideways with a speed of 20
 */
var ShowcaseRotator = pc.createScript('showcaseRotator');
ShowcaseRotator.attributes.add('speed', {
  type: 'vec3',
});

ShowcaseRotator.prototype.update = function (dt) {
  this.entity.rotate(this.speed.x * dt, this.speed.y * dt, this.speed.z * dt);
};
