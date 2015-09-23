angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;
        
        // initializes todo list
        todoList.todos = [
            {text: 'learn angular', done: true},
            {text: 'build an angular app', done: false}
        ];
        
        // adds a todo item to list
        todoList.addTodo = function(){
            todoList.todos.push({text: todoList.todoText, done: false});
            todoList.todoText = '';
        };
    
        // returns integer representing remaining todo items
        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };
    
        // removes completed todo items from list
        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if(!todo.done) todoList.todos.push(todo);
            });
        };
    });