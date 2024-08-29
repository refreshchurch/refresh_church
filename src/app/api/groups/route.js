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

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.error('Error fetching events from Planning Center:', error);
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 });
  }
}