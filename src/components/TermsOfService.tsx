import React from 'react';
import { FileText, ArrowLeft, Mail } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const TermsOfService: React.FC<Props> = ({ onBack }) => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
            <FileText className="w-4 h-4" /> Terms of Service
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="text-xs text-gray-500 mt-2">Effective Date: October 9, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            By accessing or using the Vexlora Survey platform at{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-blue-700 font-mono text-xs">
              https://vexlora-survey.vercel.app/
            </code>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">2. Service Description</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Vexlora provides a feedback collection, problem discovery, and feature suggestions platform for prospective product development. Users may submit voluntary suggestions and pain points to help improve digital products and services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">3. User Submissions & Feedback</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Any feedback, responses, or ideas submitted through the survey are provided on a voluntary basis. You grant Vexlora the non-exclusive right to review and use this feedback to inform product development, feature prioritization, and user experience enhancements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">4. Third-Party Integrations (Google Services)</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The platform provides optional administrative integrations with Google Workspace (Google Forms, Google Sheets, Gmail). When using these integrations, you agree to comply with Google's Terms of Service and applicable policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">5. Disclaimer & Limitation of Liability</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The platform is provided on an "as-is" and "as-available" basis without warranties of any kind. Vexlora shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">6. Contact Information</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            For any inquiries regarding these Terms of Service:
          </p>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1.5 font-medium">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>Support Contact: <strong className="text-gray-900">vexloraindia@gmail.com</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>Developer Contact: <strong className="text-gray-900">khushatel3010pvc@gmail.com</strong></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
