import Vue from 'vue'
const ModalConstructor=Vue.extend(require('./modal.vue'))
const Modal=(options={})=>{
    var instance=new ModalConstructor().$mount(document.createElement('div'));
    instance.visible=true;
    document.body.appendChild(instance.$el);
    return instance;
}
export default Modal