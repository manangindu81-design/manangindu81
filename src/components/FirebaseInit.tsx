'use client';

import { useEffect } from 'react';
import { initFirebase } from '@/lib/firebase';

export default function FirebaseInit() {
  useEffect(() => {
    // Initialize Firebase
    initFirebase();
  }, []);

  return null;
}