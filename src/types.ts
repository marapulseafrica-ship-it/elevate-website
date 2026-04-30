
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ModalState {
  CLOSED = 'CLOSED',
  CONSULTANT = 'CONSULTANT'
}

export type View = 'home' | 'about' | 'services' | 'contact' | 'faq' | 'booking' | 'terms' | 'privacy';
