import './lib/lib';
import $ from './lib/lib';

/*$('#first').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(3).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

 $('.wrap').html(
    `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dromdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>`
);
$('.dropdown-toggle').dropdown(); */

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea repellendus excepturi perspiciatis quam illo aspernatur eos numquam nesciunt iusto sed eius, aliquam earum vel, libero eum, obcaecati reprehenderit nobis!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save change',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello everybody');
                }
            ]
        ]
    }
}));