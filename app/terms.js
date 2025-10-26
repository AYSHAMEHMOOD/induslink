export default function TermsConditions() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[rgb(50,69,75)]-indigo-700 mb-10 mt-12 text-center">
        Terms and Conditions
      </h1>

      <p className="text-gray text-700 mb-10 text-center">
        Welcome to <strong>IndusLink</strong>. By accessing or using our
        platform, you agree to comply with and be bound by the following Terms
        and Conditions. Please read them carefully before using our services.
      </p>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 text-justify">
            By registering, accessing, or using IndusLink, you confirm that you
            accept these Terms and Conditions. If you do not agree, please do not
            use the platform.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. Description of Service
          </h2>
          <p className="text-gray-700 text-justify">
            IndusLink is a B2B digital collaboration platform connecting textile
            manufacturers and buyers across Pakistan. It enables businesses to
            create factory profiles, find suitable partners, negotiate contracts,
            and manage orders securely online.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. User Accounts and Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
            <li>Provide accurate and complete information during registration.</li>
            <li>Maintain confidentiality of your login credentials.</li>
            <li>Avoid any misuse of the platform or illegal activities.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Business Transactions
          </h2>
          <p className="text-gray-700 mb-3 text-justify">
            IndusLink facilitates communication and contract negotiation between
            factories and buyers but does not directly guarantee transactions.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
            <li>All contracts are the responsibility of involved parties.</li>
            <li>IndusLink is not liable for payment or delivery issues.</li>
            <li>Use our secure tools for clarity in communication.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Content Ownership
          </h2>
          <p className="text-gray-700 text-justify">
            Users retain ownership of their uploaded data and factory information.
            By uploading, you grant IndusLink a non-exclusive license to display
            your business for promotional or matchmaking purposes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Prohibited Activities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
            <li>Posting false or misleading information.</li>
            <li>Sharing sensitive data of other users without consent.</li>
            <li>Attempting to disrupt or hack the platform.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 text-justify">
            IndusLink is not responsible for any loss or damages arising from use
            or inability to use the platform, including but not limited to
            business loss, data loss, or service interruptions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            8. Privacy and Data Protection
          </h2>
          <p className="text-gray-700 text-justify">
            Your privacy is important to us. All personal and business data is
            managed according to our{" "}
            <a href="/privacy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            9. Updates to Terms
          </h2>
          <p className="text-gray-700 text-justify">
            IndusLink may update these Terms periodically. Continued use of the
            platform after any changes means you accept the updated terms.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            10. Contact Information
          </h2>
          <p className="text-gray-700 text-justify">
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:support@induslink.com"
              className="text-indigo-600 hover:underline"
            >
              support@induslink.com
            </a>
            .
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-sm text-center mt-10">
        Last updated: October 2025
      </p>
    </div>
  );
}
