import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.planningcenteronline.com/groups/v2/groups', {
      params: {
        include: 'enrollment',
        include: 'group_type',
        per_page: 200,
      },
      auth: {
        username: process.env.PLANNING_CENTER_APP_ID,
        password: process.env.PLANNING_CENTER_SECRET,
      },
    });

    // Ensure no caching
    const res = NextResponse.json(response.data.data, { revalidate: 0 }); // Disable Vercel's ISR
    res.headers.set('Cache-Control', 'no-store'); // Prevent browser caching
    return res;
  } catch (error) {
    console.error('Error fetching events from Planning Center:', error);
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 });
  }
}