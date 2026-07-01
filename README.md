# Health Personnel Kiosk 

A web-based self-service application designed to calculate Body Mass Index (BMI), provide personalized health categorizations, and securely log user data to a cloud database for monitoring.

##  Description

The Health Personnel Kiosk is a lightweight, interactive frontend application built to easily collect and process basic health metrics. Users input their demographic and physical data, and the system instantly calculates their BMI, providing immediate feedback on their health category (Underweight, Normal weight, Overweight, or Obese) alongside actionable advice. 

To ensure continuous tracking, the application features a real-time session history UI and is integrated with a Google Apps Script backend, automatically logging every calculation to a secure Google Sheet for further administrative or medical review.

##  Features

* **Instant BMI Calculation:** Accurately computes Body Mass Index using standard metric formulas.
* **Health Categorization:** Automatically classifies results and provides color-coded, tailored health advice.
* **Form Validation:** Ensures all required fields are filled with valid, positive numbers before processing.
* **Dynamic Session History:** Keeps a running visual log of all calculations performed during the current browser session.
* **Cloud Data Logging:** Uses the Fetch API to send formatted JSON data to a Google Web App, appending records directly to a Google Spreadsheet.

##  Technologies Used

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend / Database:** Google Apps Script, Google Sheets
* **Hosting:** GitHub Pages

##  How to Use the Kiosk

1. **Access the Application:** Open the live link hosted on GitHub Pages.
2. **Enter Details:** Fill out the required fields in the form:
   * Full Name
   * Age (between 12 and 45)
   * Gender (Male, Female, or Other)
   * Weight (in kilograms)
   * Height (in centimeters)
3. **Calculate:** Click the **Calculate BMI** button.
4. **View Results:** Read your personalized BMI result, category, and health message displayed below the form.
5. **Check History:** Scroll down to the "BMI History" section to see a running log of all entries from your current session. 
6. **Reset:** Click the **Reset** button to clear the form fields for the next user.

## ⚙️ Setup for Developers

If you wish to fork or clone this repository, you will need to connect it to your own Google Sheet.

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/Stan-0101/health-checker-kiosk.-.git](https://github.com/Stan-0101/health-checker-kiosk.-.git)