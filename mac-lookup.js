/**
 * MACVerify.com API - Browser Fetch Example
 * High-performance, no-auth networking tool
 */

const getVendorInfo = async (mac) => {
    try {
        const response = await fetch(`https://macverify.com/api/v1/lookup?mac=${mac}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('Manufacturer:', data.company);
        return data;
    } catch (error) {
        console.error('Error fetching MAC data:', error);
    }
};

// Usage
getVendorInfo('00:1A:2B:3C:4D:5E');
