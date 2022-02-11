let elementoCriado;
let quantItems = 0;
let listaItens = [];
let itens;
let listaItensCompleted = [];
let listaItensActive = [];
let listaItensAll = [];


$('.newTodo').keypress(function(event) {
	if(event.keyCode === 13 && $('.newTodo').val() != ''){
		event.preventDefault();
		quantItems++;
		let valor = $('.newTodo').val().toLowerCase();
		elementoCriado = `
		<hr>
		<div class="itemCreate">
        	<div class="rounded-corners-gradient-borders"></div>
        	<span class="textItem">${valor}</span>
        	<div class="deleteItem"></div>
    	</div>`;
    	$('.containerTodoList').prepend(elementoCriado);
    	$('.newTodo').val('');
    	itens = $('.containerTodoList > .itemCreate');
    	listaItens.push(itens[0]);
    	$('.quantItems').text(`${listaItens.length} items left`);
    	removeElement('deleteItem');
	}else{
		console.log('------------------');
	}
	$('.rounded-corners-gradient-borders').click(function(event) {
		$(this).removeClass('rounded-corners-gradient-borders');
		$(this).addClass('rounded-corners-gradient-borders-check');
		$(this).siblings('.textItem').css('text-decoration', 'line-through');
		$(this).parent('.itemCreate').addClass('completed');
	})
})
$('.changeCompleted').click(function(event) {
	
	
	listaItensCompleted = [];
	for(let i = 0;i < listaItens.length;i++){
		if(listaItens[i].classList.contains('completed')){
			$('.containerTodoListFooter > .optionTodo > p').each(function(index, el) {
				if(el.classList.contains('active')){
					el.classList.remove('active');
					$('.changeCompleted').addClass('active');
				}
			})
			listaItensCompleted.push(listaItens[i]);
			$('.containerTodoList > .itemCreate').remove();
			$('.containerTodoList > hr').remove();
			$('.containerTodoList').prepend('<hr>');
			for(let i = 0;i < listaItensCompleted.length;i++){
				$('.containerTodoList').prepend(listaItensCompleted[i]);
				$('.containerTodoList').prepend('<hr>');
			}
			$('.quantItems').text(`${listaItensCompleted.length} items left`);
		}
	}
	
});

$('.changeActive').click(function(event) {
	
	listaItensActive = [];
	for(let i = 0;i < listaItens.length;i++){
		if(!listaItens[i].classList.contains('completed')){
			$('.containerTodoListFooter > .optionTodo > p').each(function(index, el) {
				if(el.classList.contains('active')){
					el.classList.remove('active');
					$('.changeActive').addClass('active');
				}
			})
			listaItensActive.push(listaItens[i]);
			$('.containerTodoList > .itemCreate').remove();
			$('.containerTodoList > hr').remove();
			$('.containerTodoList').prepend('<hr>');
			for(let i = 0;i < listaItensActive.length;i++){
				$('.containerTodoList').prepend(listaItensActive[i]);
				$('.containerTodoList').prepend('<hr>');
			}
			$('.quantItems').text(`${listaItensActive.length} items left`);
		}
	}
	
});

$('.changeAll').click(function(event) {
	
	listaItensAll = [];
	for(let i = 0;i < listaItens.length;i++){
		if(listaItens[i].classList.contains('completed') || listaItens[i].classList.contains('itemCreate')){
			$('.containerTodoListFooter > .optionTodo > p').each(function(index, el) {
				if(el.classList.contains('active')){
					el.classList.remove('active');
					$('.changeAll').addClass('active');
				}
			})
			listaItensAll.push(listaItens[i]);
			$('.containerTodoList > .itemCreate').remove();
			$('.containerTodoList > hr').remove();
			$('.containerTodoList').prepend('<hr>');
			for(let i = 0;i < listaItensAll.length;i++){
				$('.containerTodoList').prepend(listaItensAll[i]);
				$('.containerTodoList').prepend('<hr>');
			}
			$('.quantItems').text(`${listaItensAll.length} items left`);
		}
	}
});

$('.changeClear').click(function(event) {
	$('.containerTodoList > .itemCreate').remove();
	$('.containerTodoList > hr').remove();
	$('.containerTodoList').prepend('<hr>');
	listaItensCompleted = [];
	listaItens = [];
	$('.quantItems').text(`0 items left`);
});
// Dark Mode
$('.iconThemeMode').click(function(event) {
	if($('.iconThemeMode').data('theme') == 'moon'){
		$('.iconThemeMode').data('theme','sun');
		$('.containerPrincipal').css('background', 'url(images/bg-desktop-light.jpg), hsl(0, 0%, 98%)');
		$('.containerPrincipal').css('background-repeat', 'no-repeat');
		$(this).attr('src', 'images/icon-sun.svg');
	}else{
		$('.iconThemeMode').data('theme','moon');
		$('.containerPrincipal').css('background', 'url(images/bg-desktop-dark.jpg), hsl(235, 21%, 11%)');
		$('.containerPrincipal').css('background-repeat', 'no-repeat');
		$(this).attr('src', 'images/icon-moon.svg');
	}
});





function removeElement(element){
	$('.' + element).click(function(event) {
		var remove = $(this).parent();
		var removeHr = $(this).parent().prev();
		remove.fadeOut(400, function() {
			remove.remove();
			removeHr.remove();
		})
	})
}