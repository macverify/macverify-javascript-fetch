# 🌐 MACVerify Browser Fetch API

![Browser Support](https://img.shields.io/badge/browser-all--modern-orange)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Performance](https://img.shields.io/badge/performance-ultra--fast-blueviolet)

Frontend-friendly implementation for **[MACVerify.com](https://macverify.com)**. Identify device vendors directly in the browser using the native Fetch API.

### 💡 Use Cases
* **Network Dashboards:** Display manufacturer logos/names next to MAC addresses.
* **Inventory Tools:** Real-time device identification in web-based admin panels.
* **Developer Tools:** Quick browser-based networking utilities.

### 💻 Code Example
```javascript
const lookup = async (mac) => {
    const response = await fetch(`https://macverify.com/api/v1/lookup?mac=${mac}`);
    const data = await response.json();
    console.log(`Manufacturer: ${data.company}`);
};

lookup('00:1A:2B:3C:4D:5E');
