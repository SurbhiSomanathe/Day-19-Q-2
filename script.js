var div1=document.createElement('div');
div1.setAttribute('class','table-responsive');
var currentpage=0;
var recordsperpage=10;
var maxpages = Math.ceil(100/recordsperpage);
function first()
{
    changePage(1);
}
function last()
{
    changePage(10);
}

function prev_page()
{
    if(currentpage>1){
        changePage(currentpage-1)
    }
}
function next_page()
{   
    if(currentpage<maxpages){
    changePage(currentpage+1)
    }
}
function changePage(num)
{
    if(num<1) num=1;
    if(num>maxpages) num=maxpages;

    var startPoint=(num-1)*recordsperpage;
    var endPoint=(num)*recordsperpage;

    currentpage=num;
    CreateDataTable(startPoint,endPoint);

    if(num===1)
    {
        document.getElementById('prev').style.visibility="hidden";
    }
    else{
        document.getElementById('prev').style.visibility="visible";
    }
    if(num===maxpages)
    {
        document.getElementById('prev').style.visibility="hidden";
    }
    else{
        document.getElementById('next').style.visibility="visible";
    }
    
}
function CreateDataTable(start,end)
{
    div1.innerHTML=" ";
    async function Pagi_nation(){
        try{
            let response=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
            console.log(response);
            let data=await response.json();
            console.log(data);
            

            var table=document.createElement('table');
            table.setAttribute('class','table table-bordered');

            var thead = document.createElement('thead');
            var tbody = document.createElement('tbody');

            var tr1 = document.createElement('tr');
            var th1 = document.createElement('th');
            th1.innerHTML = "Id";

            var th2 = document.createElement('th');
            th2.innerHTML = "Name";

            var th3 = document.createElement('th');
            th3.innerHTML = "Email";

            div1.append(table);
            table.append(thead,tbody);
            thead.append(tr1);
            tr1.append(th1,th2,th3);

            for(let i=start;i<end;i++)
            {
                let tr2 = document.createElement('tr');

                let td1 = document.createElement('td');
                td1.innerHTML = data[i].id;

                let td2 = document.createElement('td');
                td2.innerHTML = data[i].name;
                
                let td3 = document.createElement('td');
                td3.innerHTML = data[i].email;
                
                tr2.append(td1,td2,td3);
                tbody.append(tr2);

            }
        }
        catch(error){
            console.log(error);
        }
    }
    Pagi_nation();
}

var d=document.createElement('div');
d.setAttribute('class','anchorlist');


var prev=document.createElement('button');
prev.setAttribute('type','button');
prev.setAttribute('id','mybtn3');
prev.innerHTML="prev";
prev.addEventListener("click",prev_page);

var next=document.createElement('button');
next.setAttribute('type','button');
next.setAttribute('id','mybtn2');
next.innerHTML="next";
next.addEventListener("click",next_page);

var button=document.createElement('button');
button.setAttribute('type','button');
button.setAttribute('id','mybtn');
button.innerHTML="first";
button.addEventListener("click",first);

var button1=document.createElement('button');
button1.setAttribute('type','button');
button1.setAttribute('id','mybtn1');
button1.innerHTML="last";
button1.addEventListener("click",last)




var arr = createAnchorList();


function createAnchorList() {
    var ar = [];
    for (let i = 1; i <= 10; i++) {

        var a = document.createElement('a');
        
        a.href = `javascript:changePage(${i})`;
        a.innerHTML = i;
        if (i === 1) {
            a.setAttribute('class', 'active');
        }
        ar.push(a);
    }
    return ar;
}
document.body.append(div1, d);
d.append(prev, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9],arr[10], arr[11], arr[12], arr[13], arr[14], arr[15], arr[16], arr[17], arr[18], arr[19], next);
d.append(button,prev, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], next,button1);
changePage(1);
