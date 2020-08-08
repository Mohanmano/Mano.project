const f1=document.querySelector('form');
const list=document.querySelector('ul');
const table=document.querySelector('table');
var r1=(one,id)=>{
 let html=`
 <td data-id=${id}>
 ${one.name}
 </td>
 <td data-id=${id}>
 ${one.rollnumber}
 </td>
 <td data-id=${id}>
 ${one.marks}
 </td>
 <td data-id=${id}>
 ${one.status}
 </td>

 `;
 //console.log(html);
 table.innerHTML+=html;
}
db.collection('Student Details').get().then((d)=>{
 d.docs.forEach(d1 => {
 console.log(d1.data());
 // console.log(d1.id);
 r1(d1.data(),d1.id);
 });
//console.log(d.docs[1].data());
}).catch((err)=>{
console.log(err);
})
