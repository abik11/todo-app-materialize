import { assert } from 'chai'
import { mount } from 'avoriaz'
import List from '../src/js/components/list.vue'

describe('List.vue', function(){
	describe('addNewTodo', function(){
		it('adds new item to todos array', function(){
			const wrapper = mount(List);
			wrapper.setData({
		      newTodoText: 'New task',
		      todos: []
		  	});
			wrapper.vm.addNewTodo();		  	
			assert.equal(wrapper.data().todos.length, 1);
		});
	});

	describe('remove todo item', function(){
		it('removes one item from todo list', function(){
			const wrapper = mount(List);
			wrapper.setData({
				todos: ['Task1', 'Task2']
			});
			var button = wrapper.find('button')[0];
			button.trigger('click');
			assert.equal(wrapper.data().todos.length, 1);
		});
	});
});
