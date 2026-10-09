import React from 'react';
import { Shield, ArrowLeft, Mail, Lock, CheckCircle2 } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Survey
      </button>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xs space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <Shield className="w-4 h-4" /> Official Privacy Policy
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Vexlora Privacy Policy</h1>
          <p className="text-xs text-gray-500 mt-2">Last updated: October 9, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span>1. Introduction</span>
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Welcome to Vexlora ("we", "our", or "us"). We value your privacy and are committed to protecting your personal data. This Privacy Policy describes how we collect, use, process, and safeguard information when you visit and interact with our application at{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-blue-700 font-mono text-xs">
              https://vexlora-survey.vercel.app/
            </code>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">2. Information We Collect</h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p><strong>A. Survey Responses & Contact Details:</strong> When you voluntarily fill out our feedback and discovery survey, we collect information you provide, including your name, email address, role/organization, workflow pain points, feedback, and product suggestions.</p>
            <p><strong>B. Google Account Information:</strong> If you authenticate using Google Sign-In, we receive your public profile details (name, email address, and avatar) through Google OAuth 2.0.</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">3. How We Use Google Workspace APIs & Sensitive Scopes</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Our application integrates with Google Workspace APIs solely for administrative survey data aggregation and communication upon your explicit authorization:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 pl-2">
            <li>
              <strong>Gmail API (<code className="text-xs bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/gmail.send</code>):</strong> Used exclusively to send formatted survey submission summaries to our official inbox at <code className="text-xs bg-gray-100 px-1 rounded">vexloraindia@gmail.com</code>. We do not read, delete, or modify any existing emails.
            </li>
            <li>
              <strong>Google Sheets API (<code className="text-xs bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/spreadsheets</code>):</strong> Used exclusively to append respondent submissions to a spreadsheet designated by the administrator for record-keeping and analysis.
            </li>
            <li>
              <strong>Google Forms API (<code className="text-xs bg-gray-100 px-1 rounded">https://www.googleapis.com/auth/forms.body</code>):</strong> Used exclusively to automatically generate an official Google Form containing survey questions when requested by an administrator.
            </li>
          </ul>
        </section>

        <section className="space-y-3 p-4 rounded-xl bg-blue-50/60 border border-blue-200">
          <h2 className="text-base font-bold text-blue-950 flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600" />
            <span>4. Google User Data Policy Compliance (Limited Use)</span>
          </h2>
          <p className="text-xs text-blue-900 leading-relaxed">
            Vexlora adheres strictly to the <strong>Google API Services User Data Policy</strong>, including the Limited Use requirements.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-blue-900 pl-1 mt-2">
            <li>We do not transfer or sell Google user data to any third parties.</li>
            <li>We do not use Google user data for advertising, marketing, or training machine learning models.</li>
            <li>We store credentials and tokens strictly in-memory or secure cloud storage, and never share them with unauthorized entities.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">5. Data Retention & Security</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We employ modern encryption standards (TLS/HTTPS in transit and Google Cloud Firestore encrypted storage at rest) to safeguard your survey responses. We retain survey feedback for as long as needed to analyze user needs and plan product features.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">6. Contact Information</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy or wish to request data deletion, please contact our team:
          </p>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1.5 font-medium">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>Project Support Email: <strong className="text-gray-900">vexloraindia@gmail.com</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>Developer Email: <strong className="text-gray-900">khushatel3010pvc@gmail.com</strong></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
