const products = {
    "products": [
      {
        "name": "Wireless Headphones",
        "category": "electronic",
        "short_description": "High-quality wireless headphones",
        "long_description": "Experience high-fidelity sound with these top-of-the-line wireless headphones.",
        "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5wiZLYWtFr96VerWzd7T02mWAuJ-PWQzJL7_FrSAU-V59wlzvstcNw0afA1DS03-ZTU&usqp=CAU",
        "price": 99.99
      },
      {
        "name": "Running Shoes",
        "category": "shoes",
        "short_description": "Lightweight and durable running shoes",
        "long_description": "Achieve your running goals with these comfortable and long-lasting shoes.",
        "image_link": "https://cdn.thewirecutter.com/wp-content/media/2021/10/running-shoes-2048px-3097.jpg",
        "price": 49.99
      },
      {
        "name": "Evening Gown",
        "category": "dresses",
        "short_description": "Elegant evening gown for special occasions",
        "long_description": "Make a statement with this stunning evening gown that's sure to turn heads.",
        "image_link": "https://i.pinimg.com/originals/bd/d7/3b/bdd73b1332820091808fe3f3b29372d7.jpg",
        "price": 149.99
      },
      {
        "name": "Leather Loafers",
        "category": "footwear",
        "short_description": "Classic leather loafers for everyday use",
        "long_description": "Add a touch of sophistication to your outfit with these timeless leather loafers.",
        "image_link": "https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5jb20/34298441_NjIwLTUyNy1hY2NjYzgzODQy.webp",
        "price": 79.99
      },
      {
        "name": "Smartwatch",
        "category": "electronic",
        "short_description": "Multi-functional smartwatch for daily use",
        "long_description": "Stay connected and track your fitness with this feature-rich smartwatch.",
        "image_link": "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/461785/1.jpg?7975",
        "price": 129.99
      },
      {
        "name": "Hiking Boots",
        "category": "shoes",
        "short_description": "Sturdy and comfortable hiking boots for outdoor adventures",
        "long_description": "Conquer any terrain with these reliable and supportive hiking boots.",
        "image_link": "https://cdn.thewirecutter.com/wp-content/media/2023/03/hikingboots-2048px-2820.jpg",
        "price": 89.99
      },
      {
        "name": "Summer Dress",
        "category": "dresses",
        "short_description": "Light and breezy summer dress for casual outings",
        "long_description": "Enjoy the warm weather in style with this comfortable and fashionable summer dress.",
        "image_link": "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/8976321/1.jpg?2429",
        "price": 69.99
      },
      {
        "name": "Canvas Sneakers",
        "category": "footwear",
        "short_description": "Casual canvas sneakers for everyday wear",
        "long_description": "Stay comfortable and stylish with these versatile canvas sneakers.",
        "image_link": "https://i.ebayimg.com/images/g/2w4AAOSw5eViFyC1/s-l1200.webp",
        "price": 39.99
      },
      {
        "name": "Bluetooth Speaker",
        "category": "electronic",
        "short_description": "Portable Bluetooth speaker for on-the-go music",
        "long_description": "Enjoy your favorite tunes anywhere with this compact and powerful Bluetooth speaker.",
        "image_link": "https://m.media-amazon.com/images/I/81XHG+FZGKL.jpg",
        "price": 69.99
      },
      {
        "name": "Dress Shoes",
        "category": "shoes",
        "short_description": "Stylish and formal dress shoes for special occasions",
        "long_description": "Elevate your formal attire with these sleek and polished dress shoes.",
        "image_link": "https://d1fufvy4xao6k9.cloudfront.net/images/landings/446/oxfords-women.jpg",
        "price": 99.99
      },
      {
        "name": "Cocktail Dress",
        "category": "dresses",
        "short_description": "Chic cocktail dress for parties and gatherings",
        "long_description": "Look effortlessly elegant in this trendy and stylish cocktail dress.",
        "image_link": "https://d2tce2xojuu25e.cloudfront.net/2022/10/7J2O2_MARFIL_BARCELONA_1.jpg",
        "price": 79.99
      },
      {
        "name": "Flip Flops",
        "category": "footwear",
        "short_description": "Comfortable flip flops for casual wear",
        "long_description": "Relax and unwind in these comfortable and easy-to-wear flip flops.",
        "image_link": "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/301681/1.jpg?5548",
        "price": 19.99
      },
      {
        "name": "Gaming Console",
        "category": "electronic",
        "short_description": "High-performance gaming console for immersive gameplay",
        "long_description": "Experience gaming like never before with this powerful and cutting-edge gaming console.",
        "image_link": "https://m.media-amazon.com/images/I/61Oz3nfSK3L._AC_UF1000,1000_QL80_.jpg",
        "price": 299.99
      },
      {
        "name": "Sneakers",
        "category": "shoes",
        "short_description": "Versatile sneakers for various activities",
        "long_description": "Stay comfortable and active with these durable and versatile sneakers.",
        "image_link": "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/565934/1.jpg?9355",
        "price": 59.99
      },
      {
        "name": "Maxi Dress",
        "category": "dresses",
        "short_description": "Flowy and comfortable maxi dress for casual outings",
        "long_description": "Effortlessly elevate your style with this comfortable and fashionable maxi dress.",
        "image_link": "https://www.ahwenepa.com/wp-content/uploads/2023/05/93af3a2610a41a7828019c0ee4b5213e.jpg",
        "price": 69.99
      },
      {
        "name": "Ankle Boots",
        "category": "footwear",
        "short_description": "Trendy ankle boots for everyday use",
        "long_description": "Add a touch of fashion to your wardrobe with these trendy and versatile ankle boots.",
        "image_link": "https://www.joseph-fashion.com/dw/image/v2/BBQG_PRD/on/demandware.static/-/Sites-joseph-master-catalog/default/dwb8ac205e/images/hi-res/JF0073350010-Ankle-Boot-JO39010A-Shoes-Black-JOSEPH-2.jpg?sw=1528&sh=2000",
        "price": 79.99
      },
      {
        "name": "Laptop",
        "category": "electronic",
        "short_description": "Powerful laptop for work and entertainment",
        "long_description": "Stay productive and entertained with this high-performance and reliable laptop.",
        "image_link": "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5",
        "price": 999.99
      },
      {
        "name": "Formal Shoes",
        "category": "shoes",
        "short_description": "Elegant and formal shoes for professional settings",
        "long_description": "Make a lasting impression with these sophisticated and polished formal shoes.",
        "image_link": "https://toffpark.com/wp-content/uploads/2023/03/Genuine-Leather-Pointed-Toe-Formal-Shoe-Shinny-Black.jpg",
        "price": 89.99
      },
      {
        "name": "Summer Skirt",
        "category": "dresses",
        "short_description": "Light and breezy summer skirt for casual wear",
        "long_description": "Enjoy the warm weather in style with this comfortable and fashionable summer skirt.",
        "image_link": "https://m.media-amazon.com/images/I/81J-5w+RT0L.jpg",
        "price": 29.99
      },
      {
        "name": "Rain Boots",
        "category": "footwear",
        "short_description": "Sturdy and waterproof rain boots for wet weather",
        "long_description": "Stay dry and stylish with these reliable and waterproof rain boots.",
        "image_link": "https://cdn.thewirecutter.com/wp-content/media/2021/12/rainboots-2048px-7911.jpg",
        "price": 49.99
      },
      {
        "name": "Digital Camera",
        "category": "electronic",
        "short_description": "High-resolution digital camera for capturing moments",
        "long_description": "Capture life's precious moments with this feature-rich and high-resolution digital camera.",
        "image_link": "https://www.ubuy.com.gh/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRGlnaXRhbC1DYW1lcmEtNEstVmlkZW8tTkJELUNhbWVyYXMtZm9yLVBob3RvZ3JhcGh5LWZvci1Zb3VUdWJlLXdpdGgtV2lGaS0zLTAtSVBTLTE4MC1GbGlwLVNjcmVlbi1XaWRlLUFuZ2xlLUxlbnMtTWFjcm8tTGVucy0xNlgtRGlnaXRhbC1ab29tX2U0YzkwOTE5LWE1NDAtNDg1MC05YjA1LThhZDEwMjkwOGMyZS4xMzhhNGM1NzZjZWI5YjJiODUyZGZjMGFmOTdhZjc1MS5qcGVn.jpg",
        "price": 299.99
      },
      {
        "name": "Loafers",
        "category": "shoes",
        "short_description": "Classic loafers for casual and formal wear",
        "long_description": "Stay comfortable and stylish with these versatile and timeless loafers.",
        "image_link": "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/5/i/t/6-280-asteroid-black-original-imagne5xaugzqruj.jpeg?q=90",
        "price": 59.99
      },
      {
        "name": "Printed Dress",
        "category": "dresses",
        "short_description": "Vibrant printed dress for a fashionable look",
        "long_description": "Make a statement with this eye-catching and trendy printed dress for any occasion.",
        "image_link": "https://cdn-images.farfetch-contents.com/19/17/28/41/19172841_43835508_600.jpg",
        "price": 79.99
      },
      {
        "name": "Sandals",
        "category": "footwear",
        "short_description": "Comfortable sandals for everyday use",
        "long_description": "Stay comfortable and relaxed with these easy-to-wear and stylish sandals.",
        "image_link": "https://apim.canadiantire.ca/v1/product/api/v1/product/image/1871220p?baseStoreId=CTR&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640",
        "price": 29.99
      },
      {
        "name": "Tablet",
        "category": "electronic",
        "short_description": "Versatile tablet for work and entertainment on the go",
        "long_description": "Stay connected and productive with this versatile and portable tablet.",
        "image_link": "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MzA5NTM0fGltYWdlL3BuZ3xoNTQvaDhkLzE1NDc1NTcxOTQ5NTk4LnBuZ3w2ZmUyYzE4OWM1NjYwMTA2NDBmNmU0YjY0MGUzZGMyNTBjMjNhYjhkZDBiNzE3NDRhOTUxMzliZWM2ODNmNzAz",
        "price": 199.99
      },
      {
        "name": "Casual Shoes",
        "category": "shoes",
        "short_description": "Casual and comfortable shoes for everyday wear",
        "long_description": "Stay relaxed and stylish with these comfortable and versatile casual shoes.",
        "image_link": "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/265915/1.jpg?7643",
        "price": 49.99
      },
      {
        "name": "Formal Dress",
        "category": "dresses",
        "short_description": "Sophisticated formal dress for special occasions",
        "long_description": "Look elegant and refined in this sophisticated and fashionable formal dress.",
        "image_link": "https://cdn.luxatic.com/wp-content/uploads/2021/02/Semi-Formal-Attire.jpg",
        "price": 129.99
      },
      {
        "name": "Slippers",
        "category": "footwear",
        "short_description": "Cozy slippers for comfortable indoor wear",
        "long_description": "Relax and unwind at home with these cozy and warm slippers for all-day comfort.",
        "image_link": "https://5.imimg.com/data5/ANDROID/Default/2020/9/BZ/XP/BJ/113191466/chroma-thong-5-ni-6-nike-black-cool-grey-black-cool-grey-original-imaf5njx8cqxhhhf-jpeg-500x500.jpeg",
        "price": 19.99
      }
    ]
  }

  export { products };
  