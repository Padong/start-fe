var red= false;
var hide = false;
var img = false;

function main()
{
    var $addred = document.querySelector('.add-red');
    var $add_box = document.querySelector('.add-btn');
    var $deletebox = document.querySelector('.delete-btn');
    var $addtext = document.querySelector('.text-btn');
    var $resetbox = document.querySelector('.reset-btn');
    var $togglebox = document.querySelector('.toggle-btn');
    var $imagebox = document.querySelector('.img-btn');
    $addred.addEventListener('click',change_red);
    $add_box.addEventListener('click',add_box);
    $deletebox.addEventListener('click',delete_box);
    $addtext.addEventListener('click',add_text);
    $resetbox.addEventListener('click',reset);
    $togglebox.addEventListener('click',toggle_box);
    $imagebox.addEventListener('click',image_box);
}

//문제1 빨간색으로
function change_red()
{
    var boxs=document.querySelectorAll('.box');
    var count=boxs.length;
    if(red==false)
    {
        for(i=0; i<count; i++)
        {
            boxs[i].classList.add('red');
            red=true;
        }
        
    }
    else if(red==true)
    {
        
        for(i=0; i<count; i++)
        {
            boxs[i].className = boxs[i].className.replace('red','');
            red=false;
        }
        
    }
}

//문제2 박스추가
function add_box()
{
    var boxs=document.querySelector('.boxs')
    var add_box= document.createElement('div');
    add_box.className='box';
    boxs.appendChild(add_box);
}

//문제3 박스삭제
function delete_box()
{
    var boxs=document.querySelector('.boxs')
    boxs.removeChild(boxs.children[0]);
}

//문제 4 글자넣기
function add_text()
{
    var $text=document.getElementById('text2').value;
   
    var text=document.querySelectorAll('.box');
    var count=text.length;
    for(i=0; count; i++)
    {
        text[i].innerHTML=$text;
    }
}

//문제5 초기화
function reset_box()
{
    var boxs=document.querySelector('.boxs')
    var count=boxs.children.length;
    for(i=0;i<count;)
    {
        boxs.removeChild(boxs.children[0]);
        count=boxs.children.length;
        if(count==0)
        {
            break;
        }
    }
}

//문제6 보이기,숨기기,토글
function toggle_box()
{
   var boxs=document.querySelectorAll('.box');
   var count=boxs.length;
   
   if(hide==false)
   {
        for(i=0; i<count; i++)
        {
            boxs[i].classList.add('hide');    
            hide=true;
        }
       
    }
    else if(hide==true)
    {
        
        for(i=0; i<count; i++)
        {
            boxs[i].className = boxs[i].className.replace('hide','');
            hide=false;
        }
      
    }
}

//문제7 이미지 박스
function image_box()
{
    var boxs=document.querySelectorAll('.box');
    var count=boxs.length;
    if(count==0) add_box();
    if(img==false)
    {
        for(i=0; i<count; i++)
        {
            boxs[i].classList.add('img')   
            img=true;
        }
        
    }
    else if(img==true)
    {
        
        for(i=0; i<count; i++)
        {
            boxs[i].className = boxs[i].className.replace('img','');
            img=false;
        }
        
    }
}

main();