import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.planningcenteronline.com/registrations/v2/events', {
      params: {
        filter: 'future,active',
        per_page: 200
      },
      auth: {
        username: process.env.PLANNING_CENTER_APP_ID,
        password: process.env.PLANNING_CENTER_SECRET
      }
    });

    const filteredEvents = response.data.data.filter(
      (event) => event.attributes.visibility === 'public'
    );

    // Set no-cache headers
    const res = NextResponse.json(filteredEvents);
    res.headers.set('Cache-Control', 'no-store'); // Prevent caching
    return res;
  } catch (error) {
    console.error('Error fetching events from Planning Center:', error);
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 });
  }
}