import Vue from 'vue';
const constructor = Vue.extend(require('./input-modal.vue'));
let lock=false;
const inputModal=(options={})=>{
    var instance=new constructor().$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);
    instance.title = typeof options === 'string' ? options : options.title||'';
    instance.inputText = typeof options === 'string' ? options : options.inputText||'';
    instance.visible = true;
     return instance;
}
export default inputModal;