// api/ip.js

export default async (req, res) => {
    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    
    // Log the IP address
    console.log(`Visitor's IP address: ${ip}`);
    
    // Send a response (optional)
    res.status(200).end();
  };