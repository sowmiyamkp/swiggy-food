let foodList=[
{
	
	id:1,
	name:"Ratna Cafe (Estd.1948)",
	cusion:"South Indian, Indian, Chinese",
	rating:4.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/se4isfktvssn0xs4i3k0"
},

{
	
	id:2,
	name:"HUNGER NIGHT RESTAURANT",
	cusion:"Chinese, Biryani, Chettinad",
	rating:2.5,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t2mzebvn1rvgnqtrucrq"
},
{
	
	id:3,
	name:"THE KITCHEN STORY",
	cusion:"Indian, Chinese, Biryani, Lebanese, Beverages",
	rating:3.5,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nisbfgyebdqlxtybphqf",
},
{
	
	id:4,
	name:"Twilight Takeout",
	cusion:"North Indian, Biryani, Chinese, Continental",
	rating:4.2,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rbo9ljjjwzkhj1itb2ga"
}
]

	let cont=document.querySelector(".container");
	let cards=document.createElement("div");
	cards.classList.add("row");
	cont.appendChild(cards);
	
	foodList.forEach(function(e){
		
		let div=document.createElement("div");
			div.classList.add("col");
			cards.appendChild(div);
			
		let div2=document.createElement("div");
			div2.classList.add("col-card");
			div.appendChild(div2);
			
		let img=document.createElement("img");
			img.src=e.imgurl;
			div2.appendChild(img);
			
		let head=document.createElement("h2");
			head.innerHTML=e.name;
			div2.appendChild(head);
			
		let para=document.createElement("p");
			para.innerHTML=e.cusion;
			div2.appendChild(para);
			
		let rate=document.createElement("span");
			rate.classList.add("rate-color");
			rate.innerHTML=e.rating;
			div2.appendChild(rate);
			
			if(e.rating<=2.9){
				rate.style.backgroundColor="red";
			}
			else if(e.rating > 3 && e.rating <= 3.9){
				rate.style.backgroundColor="orange";
			}
			else if(e.rating >= 4 && e.rating < 5){
				rate.style.backgroundColor="green";
			}
			else{
				rate.style.backgroundColor="orange";
			}
		
	});