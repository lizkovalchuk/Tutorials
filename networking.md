# Networking

1. [ Raspberry Pi Failed Auth ](#raspberry-pi-failed-auth)


<a name="raspberry-pi-failed-auth"></a>

### **_Raspberry Pi Failed Auth_**

The following command shows the last 1000 entries from file `/var/log/auth.log` (from my raspberry pi)  that contains `Failed password`:

```
sudo tail -n 1000 -f /var/log/auth.log | grep "Failed password"
```

