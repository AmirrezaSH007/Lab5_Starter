# Lab 5 - Starter

Seyed Amirreza Shams Taleghani

✅ GitHub Actions workflow setup complete


1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

No, because the “message” feature involves interactions like sending data between users, which depends on backend systems or network functionality. Unit tests are meant for isolated parts of code, not full features involving external dependencies.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Yes, this is a perfect case for a unit test. You can test that the message input correctly prevents text longer than 80 characters without relying on other components. It's a small, isolated functionality with predictable behavior.
