// database.ts
// This utility simulates a JSON database using browser LocalStorage.

export interface NotifyEmail {
  id: string;
  email: string;
  timestamp: string;
}

const DB_KEY = "product_notify_emails_json_db";

export const getEmails = async (): Promise<NotifyEmail[]> => {
  try {
    // Try to fetch from server first (will work on cPanel)
    const response = await fetch('/product-api.php');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) {
        return data;
      }
    }
  } catch (err) {
    console.log("PHP backend not available, falling back to local storage");
  }

  // Fallback to local storage (for local development)
  try {
    const data = localStorage.getItem(DB_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to read from JSON DB", error);
  }
  return [];
};

const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx5Ek8f2e7Bqc7mRTY88Ullq-ptCYHpBzWgVJ-Q4AdRlSDBNbHEqqbK5Kj738hSsRql/exec";

export const saveEmail = async (email: string): Promise<boolean> => {
  try {
    const emails = await getEmails();
    
    // Check for duplicates
    if (emails.some(e => e.email === email)) {
      return false; 
    }
    
    const newEntry: NotifyEmail = {
      id: crypto.randomUUID(),
      email,
      timestamp: new Date().toISOString()
    };
    
    emails.push(newEntry);
    localStorage.setItem(DB_KEY, JSON.stringify(emails));

    // Save to Server permanently via PHP
    try {
      await fetch('/product-api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
    } catch (err) {
      console.log("Failed to save to PHP backend (expected locally)", err);
    }

    // Save to Google Sheet
    if (GOOGLE_SHEET_WEB_APP_URL && GOOGLE_SHEET_WEB_APP_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      try {
        const params = new URLSearchParams({
          id: newEntry.id,
          email: newEntry.email,
          timestamp: newEntry.timestamp
        }).toString();

        await fetch(`${GOOGLE_SHEET_WEB_APP_URL}?${params}`, {
          method: "GET",
          mode: "no-cors"
        });
      } catch (err) {
        console.error("Failed to save to Google Sheets", err);
      }
    }

    return true;
  } catch (error) {
    console.error("Failed to save to JSON DB", error);
    return false;
  }
};
