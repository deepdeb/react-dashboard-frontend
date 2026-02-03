import Heading from "../components/Heading";

const Settings = () => {
  return (
    <>
      <Heading
        title="Settings"
        subtitle="Manage your account preferences and security."
      />

      <div className="space-y-8 mx-auto max-w-4xl mt-10">
        {/* Profile Settings */}
        <section className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl">
          <h3 className="font-bold text-lg mb-6">Profile Information</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/50"
            />

            <input
              placeholder="Email Address"
              className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/50"
            />

            <input
              placeholder="Phone Number"
              className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/50"
            />

            <input
              placeholder="Location"
              className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
        </section>

        {/* Notifications */}
        <section className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl">
          <h3 className="font-bold text-lg mb-6">Notifications</h3>

          <div className="space-y-4 text-sm">
            <label className="flex justify-between items-center">
              Email Notifications
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center">
              SMS Alerts
              <input type="checkbox" />
            </label>

            <label className="flex justify-between items-center">
              Marketing Updates
              <input type="checkbox" defaultChecked />
            </label>
          </div>
        </section>

        {/* Security */}
        <section className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl">
          <h3 className="font-bold text-lg mb-6">Security</h3>

          <div className="flex flex-col md:flex-row gap-5">
            <button className="w-full md:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
              Change Password
            </button>

            <button className="w-full md:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
              Enable Two-Factor Authentication
            </button>
          </div>
        </section>

        {/* Save */}
        <div className="flex justify-end">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold shadow-lg shadow-indigo-600/20 transition">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
