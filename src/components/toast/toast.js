import Vue from 'vue'
const ToastConstructor = Vue.extend(require('./toast.vue'));
let lock=false;
let removeDom = event => {
    event.target.parentNode.removeChild(event.target);
    lock=false;
};

ToastConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
};
const Toast = (options = {}) => {
    var instance = new ToastConstructor().$mount(document.createElement('div'));
    let duration = options.duration || 2500;
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle'
    if (!lock) {
        document.body.appendChild(instance.$el);
        instance.visible = true;
        lock=true;
    }
    Vue.nextTick(() => {
        instance.timer = setTimeout(function() {
            instance.close();
        }, duration);
    });
    return instance
}
export default Toast