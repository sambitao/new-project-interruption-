import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const fileNames = [
    '01_layout_navigation.txt',
    '02_main_views.txt',
    '03_table_and_modals.txt',
    '04_js_dashboard_calendar.txt',
    '05_js_table_actions.txt',
    '06_js_data_firebase.txt'
  ];
  
  const parts = [];
  
  for (const fileName of fileNames) {
    const filePath = path.join(process.cwd(), 'public', fileName);
    if (fs.existsSync(filePath)) {
        parts.push(fs.readFileSync(filePath, 'utf8'));
    }
  }
  
  const content = parts.join('');
  
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
