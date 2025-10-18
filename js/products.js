const products = {
    laptop: [
        { name: 'Dell Inspiron 15', description: 'Intel i5, 8GB RAM, 512GB SSD, 15.6" FHD Display', price: '$699', icon: 'fa-laptop' },
        { name: 'HP Pavilion 14', description: 'AMD Ryzen 5, 16GB RAM, 256GB SSD, Touchscreen', price: '$749', icon: 'fa-laptop' },
        { name: 'Lenovo ThinkPad X1', description: 'Intel i7, 16GB RAM, 1TB SSD, Business Grade', price: '$1299', icon: 'fa-laptop' },
        { name: 'ASUS VivoBook 15', description: 'Intel i3, 8GB RAM, 256GB SSD, Lightweight Design', price: '$549', icon: 'fa-laptop' },
        { name: 'Acer Aspire 5', description: 'AMD Ryzen 7, 12GB RAM, 512GB SSD, 15.6" Display', price: '$699', icon: 'fa-laptop' },
        { name: 'MSI Prestige 14', description: 'Intel i7, 16GB RAM, 512GB SSD, Ultra Portable', price: '$1199', icon: 'fa-laptop' },
        { name: 'MacBook Air M2', description: 'Apple M2 Chip, 8GB RAM, 256GB SSD, Retina Display', price: '$1099', icon: 'fa-laptop' },
        { name: 'Samsung Galaxy Book2', description: 'Intel i5, 8GB RAM, 256GB SSD, AMOLED Screen', price: '$849', icon: 'fa-laptop' },
        { name: 'Microsoft Surface Laptop 5', description: 'Intel i7, 16GB RAM, 512GB SSD, Touch Display', price: '$1399', icon: 'fa-laptop' },
        { name: 'LG Gram 17', description: 'Intel i7, 16GB RAM, 1TB SSD, Ultra Lightweight', price: '$1599', icon: 'fa-laptop' },
        { name: 'Razer Blade 15', description: 'Intel i9, 32GB RAM, 1TB SSD, RTX 3070 Gaming', price: '$2299', icon: 'fa-laptop' },
        { name: 'Dell XPS 13', description: 'Intel i7, 16GB RAM, 512GB SSD, InfinityEdge Display', price: '$1249', icon: 'fa-laptop' },
        { name: 'HP Envy x360', description: 'AMD Ryzen 7, 16GB RAM, 512GB SSD, 2-in-1 Convertible', price: '$899', icon: 'fa-laptop' },
        { name: 'Lenovo IdeaPad 3', description: 'Intel i5, 8GB RAM, 256GB SSD, Budget Friendly', price: '$499', icon: 'fa-laptop' },
        { name: 'ASUS ROG Strix G15', description: 'AMD Ryzen 9, 16GB RAM, 1TB SSD, Gaming Laptop', price: '$1699', icon: 'fa-laptop' },
        { name: 'Acer Swift 3', description: 'Intel i5, 8GB RAM, 512GB SSD, Thin & Light', price: '$649', icon: 'fa-laptop' },
        { name: 'Huawei MateBook D15', description: 'Intel i5, 8GB RAM, 256GB SSD, FullView Display', price: '$599', icon: 'fa-laptop' },
        { name: 'Chromebook Flip C434', description: 'Intel Core m3, 8GB RAM, 64GB eMMC, Chrome OS', price: '$569', icon: 'fa-laptop' },
        { name: 'MSI GF63 Thin', description: 'Intel i5, 16GB RAM, 512GB SSD, GTX 1650 Gaming', price: '$799', icon: 'fa-laptop' },
        { name: 'Gigabyte Aero 15', description: 'Intel i7, 16GB RAM, 1TB SSD, OLED Display', price: '$1799', icon: 'fa-laptop' }
    ],
    printer: [
        { name: 'HP LaserJet Pro M404n', description: 'Monochrome Laser Printer, 40ppm, Network Ready', price: '$299', icon: 'fa-print' },
        { name: 'Canon PIXMA TR8620', description: 'All-in-One Inkjet, Wireless, Auto Document Feeder', price: '$179', icon: 'fa-print' },
        { name: 'Epson EcoTank ET-2720', description: 'Cartridge-free Printing, Wireless, All-in-One', price: '$249', icon: 'fa-print' },
        { name: 'Brother HL-L2350DW', description: 'Compact Laser Printer, Wireless, Duplex Printing', price: '$119', icon: 'fa-print' },
        { name: 'HP OfficeJet Pro 9015e', description: 'All-in-One Color Inkjet, Smart Tasks, Wireless', price: '$229', icon: 'fa-print' },
        { name: 'Canon imageCLASS MF445dw', description: 'Monochrome Laser All-in-One, Duplex, Touchscreen', price: '$399', icon: 'fa-print' },
        { name: 'Epson WorkForce Pro WF-4830', description: 'All-in-One Color Inkjet, Auto 2-Sided, Wireless', price: '$199', icon: 'fa-print' },
        { name: 'Brother MFC-L2750DW', description: 'Laser All-in-One, Wireless, 2-Sided Printing', price: '$279', icon: 'fa-print' },
        { name: 'HP Color LaserJet Pro M255dw', description: 'Color Laser Printer, Wireless, Compact Design', price: '$279', icon: 'fa-print' },
        { name: 'Canon MAXIFY GX7020', description: 'MegaTank All-in-One, Wireless, High-Volume Printing', price: '$449', icon: 'fa-print' },
        { name: 'Xerox VersaLink C405', description: 'Color Multifunction Printer, Enterprise Grade', price: '$899', icon: 'fa-print' },
        { name: 'Epson Expression Photo HD XP-15000', description: 'Wide-Format Photo Printer, 6-Color Printing', price: '$299', icon: 'fa-print' },
        { name: 'Brother HL-L8360CDW', description: 'Color Laser Printer, Duplex, Network Ready', price: '$449', icon: 'fa-print' },
        { name: 'HP LaserJet Enterprise M507dn', description: 'Monochrome Laser, High-Speed, Security Features', price: '$549', icon: 'fa-print' },
        { name: 'Canon SELPHY CP1500', description: 'Compact Photo Printer, Wireless, 4x6" Prints', price: '$129', icon: 'fa-print' },
        { name: 'Epson SureColor P700', description: 'Professional Photo Printer, 13" Wide Format', price: '$799', icon: 'fa-print' },
        { name: 'Lexmark MC3224adwe', description: 'Color Laser All-in-One, Compact, Wireless', price: '$349', icon: 'fa-print' },
        { name: 'Ricoh SP 377DNwX', description: 'Monochrome Laser, Network, Duplex Printing', price: '$249', icon: 'fa-print' },
        { name: 'Kyocera ECOSYS M3145idn', description: 'Multifunction Black & White Laser, Enterprise', price: '$599', icon: 'fa-print' },
        { name: 'OKI MC573dn', description: 'Color LED Multifunction Printer, Duplex, Network', price: '$699', icon: 'fa-print' }
    ],
    memory: [
        { name: 'Corsair Vengeance RGB Pro 16GB', description: 'DDR4 3200MHz, RGB Lighting, Desktop RAM', price: '$79', icon: 'fa-memory' },
        { name: 'G.Skill Ripjaws V 32GB', description: 'DDR4 3600MHz, High Performance, Dual Channel', price: '$119', icon: 'fa-memory' },
        { name: 'Kingston HyperX Fury 8GB', description: 'DDR4 2666MHz, Plug and Play, Budget Option', price: '$39', icon: 'fa-memory' },
        { name: 'Crucial Ballistix 16GB', description: 'DDR4 3200MHz, Gaming Memory, Heat Spreader', price: '$69', icon: 'fa-memory' },
        { name: 'TeamGroup T-Force Delta RGB 32GB', description: 'DDR4 3600MHz, Full RGB, High Speed', price: '$129', icon: 'fa-memory' },
        { name: 'Samsung 16GB DDR4', description: 'SODIMM 2666MHz, Laptop Memory, Reliable', price: '$59', icon: 'fa-memory' },
        { name: 'Patriot Viper Steel 64GB', description: 'DDR4 3200MHz, Quad Channel, Workstation Grade', price: '$229', icon: 'fa-memory' },
        { name: 'ADATA XPG Spectrix D60G 16GB', description: 'DDR4 3200MHz, Dual RGB Light Strips', price: '$89', icon: 'fa-memory' },
        { name: 'Crucial 32GB Kit DDR5', description: 'DDR5 4800MHz, Next-Gen Memory, High Bandwidth', price: '$169', icon: 'fa-memory' },
        { name: 'G.Skill Trident Z Neo 64GB', description: 'DDR4 3600MHz, AMD Optimized, RGB', price: '$279', icon: 'fa-memory' },
        { name: 'Corsair Dominator Platinum 32GB', description: 'DDR4 3200MHz, Premium Build, DHX Cooling', price: '$199', icon: 'fa-memory' },
        { name: 'Kingston ValueRAM 8GB', description: 'DDR4 2400MHz, Entry Level, Reliable', price: '$29', icon: 'fa-memory' },
        { name: 'Mushkin Redline Lumina 16GB', description: 'DDR4 3600MHz, RGB Lighting, Overclockable', price: '$79', icon: 'fa-memory' },
        { name: 'Patriot Signature Line 16GB', description: 'DDR4 2666MHz, Value Memory, Lifetime Warranty', price: '$49', icon: 'fa-memory' },
        { name: 'G.Skill Aegis 32GB', description: 'DDR4 3200MHz, No Frills, Budget Friendly', price: '$99', icon: 'fa-memory' },
        { name: 'HyperX Impact 16GB SODIMM', description: 'DDR4 2933MHz, Laptop Memory, High Performance', price: '$69', icon: 'fa-memory' },
        { name: 'Corsair Vengeance LPX 64GB', description: 'DDR4 3200MHz, Low Profile, Quad Channel', price: '$249', icon: 'fa-memory' },
        { name: 'Crucial 8GB DDR3L', description: 'SODIMM 1600MHz, Legacy Laptop Memory', price: '$34', icon: 'fa-memory' },
        { name: 'TeamGroup Elite Plus 16GB', description: 'DDR4 2666MHz, Basic Memory, Affordable', price: '$44', icon: 'fa-memory' },
        { name: 'ADATA Premier 32GB', description: 'DDR4 2666MHz, Reliable Performance, Value', price: '$109', icon: 'fa-memory' }
    ],
    networking: [
        { name: 'TP-Link Archer AX50', description: 'Wi-Fi 6 Router, Dual Band, Gigabit Ports', price: '$129', icon: 'fa-wifi' },
        { name: 'Netgear Nighthawk R7000', description: 'AC1900 Router, Dual Band, Beamforming+', price: '$159', icon: 'fa-wifi' },
        { name: 'ASUS RT-AX88U', description: 'Wi-Fi 6 Gaming Router, AiMesh Support, 8 Ports', price: '$299', icon: 'fa-wifi' },
        { name: 'Linksys Velop MX5300', description: 'Mesh Wi-Fi 6 System, Tri-Band, Whole Home Coverage', price: '$399', icon: 'fa-wifi' },
        { name: 'D-Link DIR-867', description: 'AC1750 Router, Dual Band, Budget Friendly', price: '$69', icon: 'fa-wifi' },
        { name: 'Ubiquiti UniFi Dream Machine', description: 'All-in-One Router, Wi-Fi 6, Enterprise Grade', price: '$299', icon: 'fa-wifi' },
        { name: 'Google Nest WiFi', description: 'Mesh System, Easy Setup, Smart Home Integration', price: '$269', icon: 'fa-wifi' },
        { name: 'Cisco RV340', description: 'Dual WAN VPN Router, Business Grade, Security', price: '$349', icon: 'fa-wifi' },
        { name: 'Netgear Orbi RBK50', description: 'Mesh Wi-Fi System, Tri-Band, 5000 sq ft Coverage', price: '$299', icon: 'fa-wifi' },
        { name: 'TP-Link Deco X60', description: 'Mesh Wi-Fi 6 System, AI-Driven, Parental Controls', price: '$229', icon: 'fa-wifi' },
        { name: 'Netgear 8-Port Gigabit Switch', description: 'GS308, Unmanaged, Plug and Play, Metal Case', price: '$29', icon: 'fa-network-wired' },
        { name: 'TP-Link 24-Port Managed Switch', description: 'TL-SG3428, Gigabit, Layer 2+, VLAN Support', price: '$199', icon: 'fa-network-wired' },
        { name: 'Cisco SG350-10', description: '10-Port Managed Switch, Gigabit, PoE+', price: '$249', icon: 'fa-network-wired' },
        { name: 'ASUS ZenWiFi AX6600', description: 'Mesh Wi-Fi 6 System, Tri-Band, AiProtection', price: '$379', icon: 'fa-wifi' },
        { name: 'Arris SURFboard SBG7600AC2', description: 'Cable Modem + Router, DOCSIS 3.0, AC2350', price: '$179', icon: 'fa-wifi' },
        { name: 'Motorola MB7621', description: 'Cable Modem, DOCSIS 3.0, Gigabit Ethernet', price: '$79', icon: 'fa-network-wired' },
        { name: 'Ubiquiti EdgeRouter X', description: 'Advanced Gigabit Router, PoE Support, Compact', price: '$59', icon: 'fa-network-wired' },
        { name: 'MikroTik hEX S', description: 'Gigabit Router, SFP Port, VPN Ready', price: '$69', icon: 'fa-network-wired' },
        { name: 'Synology RT2600ac', description: 'Wireless Router, Dual Band, Powerful Processor', price: '$199', icon: 'fa-wifi' },
        { name: 'Eero Pro 6E', description: 'Mesh Wi-Fi 6E System, 2.5 GbE, Premium Performance', price: '$549', icon: 'fa-wifi' }
    ],
    desktop: [
        { name: 'Dell OptiPlex 3080', description: 'Intel i5-10500, 8GB RAM, 256GB SSD, Windows 10 Pro', price: '$699', icon: 'fa-desktop' },
        { name: 'HP Pavilion Gaming Desktop', description: 'AMD Ryzen 5, 16GB RAM, 512GB SSD + 1TB HDD, GTX 1650', price: '$849', icon: 'fa-desktop' },
        { name: 'Apple iMac 24"', description: 'M1 Chip, 8GB RAM, 256GB SSD, 4.5K Retina Display', price: '$1299', icon: 'fa-desktop' },
        { name: 'Lenovo ThinkCentre M720', description: 'Intel i7-9700, 16GB RAM, 512GB SSD, Business PC', price: '$899', icon: 'fa-desktop' },
        { name: 'ASUS ROG Strix GL10DH', description: 'AMD Ryzen 7, 16GB RAM, 1TB SSD, RTX 2060, Gaming', price: '$1399', icon: 'fa-desktop' },
        { name: 'Acer Aspire TC-895', description: 'Intel i3-10100, 8GB RAM, 512GB SSD, Budget Desktop', price: '$549', icon: 'fa-desktop' },
        { name: 'MSI Trident 3', description: 'Intel i5-10400, 16GB RAM, 512GB SSD, Compact Gaming', price: '$999', icon: 'fa-desktop' },
        { name: 'CyberPowerPC Gamer Xtreme', description: 'Intel i7-11700F, 16GB RAM, 1TB SSD, RTX 3060', price: '$1599', icon: 'fa-desktop' },
        { name: 'iBUYPOWER Gaming Desktop', description: 'AMD Ryzen 5, 16GB RAM, 500GB SSD, RX 6600 XT', price: '$1299', icon: 'fa-desktop' },
        { name: 'HP ENVY Desktop', description: 'Intel i7-11700, 32GB RAM, 1TB SSD, Creator PC', price: '$1499', icon: 'fa-desktop' },
        { name: 'Dell XPS 8950', description: 'Intel i7-12700, 16GB RAM, 512GB SSD, Premium Desktop', price: '$1199', icon: 'fa-desktop' },
        { name: 'Alienware Aurora R14', description: 'AMD Ryzen 9, 32GB RAM, 2TB SSD, RTX 3080, Gaming', price: '$2799', icon: 'fa-desktop' },
        { name: 'Lenovo IdeaCentre 3', description: 'AMD Ryzen 3, 8GB RAM, 256GB SSD, Home Office', price: '$449', icon: 'fa-desktop' },
        { name: 'ASUS Mini PC PN51', description: 'AMD Ryzen 7, 16GB RAM, 512GB SSD, Ultra Compact', price: '$799', icon: 'fa-desktop' },
        { name: 'Intel NUC 11 Performance', description: 'Intel i7-1165G7, 16GB RAM, 512GB SSD, Mini PC', price: '$899', icon: 'fa-desktop' },
        { name: 'Corsair One i300', description: 'Intel i9-12900K, 64GB RAM, 2TB SSD, RTX 3080 Ti', price: '$4299', icon: 'fa-desktop' },
        { name: 'HP Slim Desktop S01', description: 'Intel Celeron, 4GB RAM, 256GB SSD, Entry Level', price: '$329', icon: 'fa-desktop' },
        { name: 'Acer Predator Orion 3000', description: 'Intel i7-11700, 16GB RAM, 1TB SSD, RTX 3060 Ti', price: '$1699', icon: 'fa-desktop' },
        { name: 'NZXT H1 Custom Build', description: 'AMD Ryzen 5, 16GB RAM, 1TB SSD, GTX 1660 Ti', price: '$1199', icon: 'fa-desktop' },
        { name: 'Mac Mini M2', description: 'Apple M2 Chip, 8GB RAM, 256GB SSD, Compact Power', price: '$599', icon: 'fa-desktop' }
    ],
    storage: [
        { name: 'Samsung 980 PRO 1TB', description: 'NVMe SSD, PCIe 4.0, 7000MB/s Read Speed', price: '$149', icon: 'fa-hdd' },
        { name: 'WD Black SN850 2TB', description: 'NVMe SSD, Gaming Storage, Gen4 Performance', price: '$299', icon: 'fa-hdd' },
        { name: 'Crucial MX500 1TB', description: 'SATA SSD, 560MB/s, Reliable Performance', price: '$89', icon: 'fa-hdd' },
        { name: 'Seagate BarraCuda 4TB', description: 'Internal HDD, 7200 RPM, 256MB Cache', price: '$89', icon: 'fa-hdd' },
        { name: 'WD Blue 2TB', description: 'Internal HDD, 5400 RPM, Desktop Storage', price: '$54', icon: 'fa-hdd' },
        { name: 'Kingston A2000 500GB', description: 'NVMe SSD, PCIe 3.0, Budget Friendly', price: '$49', icon: 'fa-hdd' },
        { name: 'SanDisk Extreme Portable 1TB', description: 'External SSD, USB-C, 1050MB/s, Rugged', price: '$129', icon: 'fa-hdd' },
        { name: 'Samsung T7 2TB', description: 'Portable SSD, USB 3.2, Compact Design', price: '$199', icon: 'fa-hdd' },
        { name: 'WD My Passport 5TB', description: 'External HDD, USB 3.0, Password Protection', price: '$129', icon: 'fa-hdd' },
        { name: 'Seagate Backup Plus 4TB', description: 'External HDD, USB 3.0, Automatic Backup', price: '$99', icon: 'fa-hdd' },
        { name: 'Corsair MP600 PRO 2TB', description: 'NVMe SSD, PCIe Gen4, High-End Performance', price: '$279', icon: 'fa-hdd' },
        { name: 'ADATA XPG SX8200 Pro 1TB', description: 'NVMe SSD, 3D NAND, Great Value', price: '$99', icon: 'fa-hdd' },
        { name: 'Toshiba X300 6TB', description: 'Performance HDD, 7200 RPM, High Capacity', price: '$149', icon: 'fa-hdd' },
        { name: 'Crucial P5 Plus 1TB', description: 'NVMe SSD, PCIe 4.0, Micron Technology', price: '$129', icon: 'fa-hdd' },
        { name: 'WD Red Plus 8TB', description: 'NAS HDD, 5400 RPM, 24/7 Reliability', price: '$199', icon: 'fa-hdd' },
        { name: 'Samsung 870 EVO 2TB', description: 'SATA SSD, 560MB/s, Upgrade Solution', price: '$189', icon: 'fa-hdd' },
        { name: 'SanDisk Ultra 3D 500GB', description: 'SATA SSD, 3D NAND, Affordable Upgrade', price: '$54', icon: 'fa-hdd' },
        { name: 'G-Technology ArmorATD 2TB', description: 'Rugged External HDD, USB-C, Shock Resistant', price: '$99', icon: 'fa-hdd' },
        { name: 'LaCie Rugged Mini 4TB', description: 'External HDD, Drop/Crush Resistant', price: '$139', icon: 'fa-hdd' },
        { name: 'Sabrent Rocket 4 Plus 4TB', description: 'NVMe SSD, PCIe 4.0, Extreme Capacity', price: '$599', icon: 'fa-hdd' }
    ]
};

function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const productsToShow = category === 'all' 
        ? Object.values(products).flat() 
        : products[category];

    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', category);
        
        card.innerHTML = `
            <div class="product-image">
                <i class="fas ${product.icon}"></i>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="whatsapp-btn" onclick="shopOnWhatsApp('${product.name}', '${product.price}')">
                    <i class="fab fa-whatsapp"></i> Shop on WhatsApp
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function shopOnWhatsApp(productName, price) {
    const message = `Hi! I'm interested in purchasing:\n\n*Product:* ${productName}\n*Price:* ${price}\n\nPlease provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/15551234567?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderProducts(category);
    });
});

renderProducts('all');
