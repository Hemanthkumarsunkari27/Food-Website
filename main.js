const menuItems = [
    {
      name: "Classic Burger",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
      name: "Margherita Pizza",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500"
    },
    {
      name: "Caesar Salad",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500"
    },
    {
      name: "Pasta Carbonara",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500"
    },
    {
      name: "Grilled Salmon",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500"
    },
    {
      name: "Chocolate Cake",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
    }
  ];
  
  function createMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-content">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
        </div>
      `;
      
      menuGrid.appendChild(menuItem);
    });
  }
  
  window.scrollToMenu = function() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Initialize the menu when the page loads
  document.addEventListener('DOMContentLoaded', createMenuItems);
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });