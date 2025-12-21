"use client";
import {
  Play,
  Target,
  Crown,
  Gift,
  Star,
  Zap,
  ArrowRight,
  Eye,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Users,
  Clock,
  Award,
} from "lucide-react";

interface UserTypeCardsProps {
  userType: "earner" | "business";
  setUserType: (value: "earner" | "business") => void;
}

export default function UserTypeCards({
  userType,
  setUserType,
}: UserTypeCardsProps) {
  return (
    <div className="max-w-5xl mx-auto mb-16 px-2">
      {/* Tabs */}
      <div className="max-w-md mx-auto mb-12">
        <p className="text-center text-white/70 text-sm mb-4">
          Please select your user type to continue.
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
          <div className="grid grid-cols-2 gap-2">
            {/* PARTICIPANT */}
            <button
              onClick={() => setUserType("earner")}
              className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                userType === "earner"
                  ? "bg-gradient-to-r from-amber-300 to-amber-500 text-white shadow-md scale-[1.02]"
                  : "text-white/60 hover:text-white bg-white/5"
              }`}
            >
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <Play className="w-5 h-5" />
                <span>Participant</span>
              </div>
            </button>

            {/* BUSINESS */}
            <button
              onClick={() => setUserType("business")}
              className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                userType === "business"
                  ? "bg-gradient-to-r from-sky-300 to-indigo-400 text-white shadow-md scale-[1.02]"
                  : "text-white/60 hover:text-white bg-white/5"
              }`}
            >
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <Target className="w-5 h-5" />
                <span>Business</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Box */}
      <div className="relative">
        {/* Soft Background */}
        <div
          className={`absolute inset-0 rounded-3xl blur-[55px] opacity-20 
          ${
            userType === "earner"
              ? "from-amber-200 via-amber-300 to-amber-400 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]"
              : "from-sky-200 via-indigo-200 to-indigo-300 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]"
          }`}
        ></div>

        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl px-4 py-8 md:p-12 border border-white/10 shadow-xl">
          {userType === "earner" ? (
            <div className="space-y-8">
              {/* HEADER */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-300/20 rounded-2xl mb-4 border border-amber-300/30">
                  <Star className="w-10 h-10 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                  For Participants
                </h2>
                <p className="text-white/70 text-md">
                  Engage with content and receive valuable rewards.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-amber-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-amber-400/60">
                  <div className="w-14 h-14 bg-amber-300/20 rounded-xl flex items-center justify-center mb-4 border border-amber-300/30">
                    <Eye className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Interactive Content
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Engage with sponsored content and receive points instantly.
                  </p>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    Start Engaging
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-yellow-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400/60">
                  <div className="w-14 h-14 bg-yellow-300/20 rounded-xl flex items-center justify-center mb-4 border border-yellow-300/30">
                    <Crown className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Fortune Wheel
                  </h3>
                  <div className="text-white/60 text-sm mb-3 space-y-2">
                    <p>
                      Standard Entry{" "}
                      <span className="text-amber-300 font-semibold">
                        (Random rewards)
                      </span>
                    </p>
                    <p>
                      Premium Entry{" "}
                      <span className="text-yellow-300 font-semibold">
                        (Better chances)
                      </span>
                    </p>
                    <p>
                      Bonus Rewards:{" "}
                      <span className="text-green-300 font-semibold">
                        Instant
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400 text-xs font-semibold mb-4">
                    <Star className="w-4 h-4" />4 Reward Levels
                  </div>

                  {/* MONTHLY REWARDS */}
                  <div className="bg-yellow-300/10 rounded-xl p-4 border border-yellow-300/30">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <Crown className="w-4 h-4 text-yellow-400" />
                      Monthly Top Performers
                    </h4>
                    <ul className="text-white/70 text-xs space-y-1">
                      <li>
                        <span className="text-yellow-300 font-semibold">
                          1st Place:
                        </span>{" "}
                        Premium Package + Bonus
                      </li>
                      <li>
                        <span className="text-yellow-300 font-semibold">
                          2nd Place:
                        </span>{" "}
                        Advanced Package + Bonus
                      </li>
                      <li>
                        <span className="text-yellow-300 font-semibold">
                          3rd Place:
                        </span>{" "}
                        Standard Package + Bonus
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-purple-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/60">
                  <div className="w-14 h-14 bg-purple-300/20 rounded-xl flex items-center justify-center mb-4 border border-purple-300/30">
                    <Gift className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Extra Activities
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Complete tasks and challenges for additional rewards.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                    <Zap className="w-4 h-4" />
                    Premium Benefits
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="bg-amber-300/10 rounded-xl p-4 border border-amber-300/30">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400" />
                  <p className="text-white/90 text-sm">
                    <span className="font-semibold">
                      First 10,000 members receive special launch bonuses!
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3 mt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70" />
                  <p className="text-white/80 text-sm">
                    <span className="font-semibold">Secure Registration:</span>
                    Your data is encrypted and never shared with third parties.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-white/70" />
                  <p className="text-white/80 text-sm">
                    <span className="font-semibold">Limited Early Access:</span>
                    Special bonuses available for early registrations only.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* HEADER */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-300/20 rounded-2xl mb-4 border border-sky-300/30">
                  <Target className="w-10 h-10 text-sky-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                  For Business Partners
                </h2>
                <p className="text-white/70 text-md">
                  Connect with engaged audiences through our platform.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-sky-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-sky-400/60">
                  <div className="w-14 h-14 bg-sky-300/20 rounded-xl flex items-center justify-center mb-4 border border-sky-300/30">
                    <TrendingUp className="w-7 h-7 text-sky-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Standard Campaigns
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Flexible placement options with targeted audience reach.
                  </p>
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    Launch Campaign
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-indigo-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-400/60">
                  <div className="w-14 h-14 bg-indigo-300/20 rounded-xl flex items-center justify-center mb-4 border border-indigo-300/30">
                    <Sparkles className="w-7 h-7 text-indigo-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Premium Campaigns
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Guaranteed visibility with priority placement options.
                  </p>
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                    <Star className="w-4 h-4" />
                    Maximum Engagement
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-emerald-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400/60">
                  <div className="w-14 h-14 bg-emerald-300/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-300/30">
                    <Users className="w-7 h-7 text-emerald-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Smart Start
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Begin with flexible budget options and precise targeting.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Zap className="w-4 h-4" />
                    Advanced Targeting
                  </div>
                </div>
              </div>

              {/* INFO BLOCKS */}
              <div className="space-y-4">
                <div className="bg-sky-300/10 rounded-xl p-4 border border-sky-300/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400" />
                    <p className="text-white/90 text-sm">
                      <span className="font-semibold">
                        Verified engagement metrics
                      </span>{" "}
                      with transparent reporting and unique view tracking.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-300/10 rounded-xl p-4 border border-indigo-300/30">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-indigo-300" />
                    <p className="text-white/90 text-sm">
                      High engagement rates through interactive campaigns.
                      Secure payments via multiple methods.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-300/10 rounded-xl p-4 border border-emerald-300/30">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-300" />
                    <p className="text-white/90 text-sm">
                      <span className="font-semibold">
                        Premium quality traffic
                      </span>{" "}
                      with advanced fraud protection systems.
                    </p>
                  </div>
                </div>

                <button className="w-full mt-2 mb-4 px-4 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                  Get Started – Join Early Access
                </button>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70" />
                  <p className="text-white/80 text-sm">
                    <span className="font-semibold">Secure Registration:</span>
                    Your information is protected and never shared.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-white/70" />
                  <p className="text-white/80 text-sm">
                    <span className="font-semibold">Limited Launch Offer:</span>
                    Special rates for early adopters.
                  </p>
                </div>
              </div>

              <div className="bg-sky-300/10 rounded-xl p-4 border border-sky-300/30">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-sky-400" />
                  <p className="text-white/90 text-sm">
                    20% bonus visibility on your first campaign.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
