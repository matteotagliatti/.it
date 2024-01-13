---
tipologia: articoli
titolo: An introduction to Tor cs I2P
autore: IVPN
url: https://www.ivpn.net/privacy-guides/an-introduction-to-tor-vs-i2p/
anno: 2023
---

As we saw above, the primary use case for Tor is enabling anonymous access of the public internet with hidden services as an ancillary benefit. I2P on the other hand, was designed from day one to be a true ‘darknet’. Its primary function is to be a ‘network within the internet’, with traffic staying contained in its borders.

I2P performs packet based routing as opposed to Tor’s circuit based routing. This has the benefit of permitting I2P to dynamically route around congestion and service interruptions in a manner similar to the internet’s IP routing. This provides a higher level of reliability and redundancy to the network itself. Additionally, I2P does not rely on a trusted directory service to get route information. Instead, network routes are formed and constantly updatad dynamically, with each router constantly evaluating other routers and sharing what it finds

Tor functions by providing a proxy on your local machine that you must configure your applications to use (of download specially configured application bundles). In contrast, I2P is generally used by applications that are written specifically to run on the I2P network.
