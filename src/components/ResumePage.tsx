import { useProfileData } from "@/src/providers/profile";
import { formatDate } from "@/src/utils/date";

export function ResumePage() {
  const { profileData } = useProfileData();

  if (!profileData) {
    return null;
  }

  return (
    <div id="resume-page" class="container w-full">
      <div class="grid grid-cols-6 gap-4">
        <div class="col-span-2 bg-slate-800 text-gray-100 py-4">
          <div class="flex flex-col w-full items-center gap-2">
            <img alt="profile avatar" class="w-12 h-12 rounded-full" src={profileData.imageUrl} />
            <h2 class="text-xl">{profileData.name}</h2>
            <div class="w-8 border-b border-slate-700" />
            <h2 class="text-[10px] text-white/70 !font-body">{profileData.title}</h2>
          </div>

          <div class="py-8 px-8">
            <div class="flex flex-col items-start gap-2 pb-8">
              <h2 class="font-bold">Details</h2>
              <address class="text-xs">{profileData.location}</address>
              <a class="text-xs" href={`tel:${profileData.phoneNumber}`}>
                {profileData.phoneNumber}
              </a>
              <a class="text-xs" href={`mailto:${profileData.email}`}>
                {profileData.email}
              </a>
            </div>
            <div class="flex flex-col items-start gap-2 pb-8">
              <h2 class="font-bold">Links</h2>
              {profileData.links.map((link) => {
                return (
                  <a key={link.name} class="text-xs" href={link.href}>
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div class="flex flex-col items-start gap-2 pb-8">
              <h2 class="font-bold">Skills</h2>
              <ul class="text-xs space-y-2">
                {profileData.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            {profileData.hobbies && profileData.hobbies.length > 0 && (
              <div class="flex flex-col items-start gap-2 pb-8">
                <h2 class="font-bold">Hobbies</h2>
                <p class="text-xs">{profileData.hobbies}</p>
              </div>
            )}
            <div class="flex flex-col items-start gap-2 pb-8">
              <h2 class="font-bold">Languages</h2>
              <ul class="text-xs space-y-2">
                {profileData.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div class="col-span-4 bg-white px-4 pt-4 pb-8">
          <div class="mb-4">
            <h2 class="font-bold text-xl">Profile</h2>
            {profileData.description && (
              <p
                // biome-ignore lint/security/noDangerouslySetInnerHtml: we can trust this description source
                dangerouslySetInnerHTML={{
                  __html: profileData.description,
                }}
              />
            )}
          </div>
          <div class="mb-4">
            <h2 class="font-bold text-xl mb-4">Employment History</h2>
            {profileData.jobHistory.map((job) => {
              if (!job.description) {
                return null;
              }
              return (
                <div key={job.name} class="mb-8">
                  <div class="mb-2">
                    <h3 class="font-bold text-sm leading-tight">
                      {job.title}, {job.name}
                    </h3>
                    <small class="text-black/40 text-[8px]">
                      {formatDate(job.startDate)} - {formatDate(job.endDate)}
                    </small>
                  </div>

                  {/* biome-ignore lint/security/noDangerouslySetInnerHtml: we can trust this description source */}
                  <p dangerouslySetInnerHTML={{ __html: job.description }} />
                </div>
              );
            })}
          </div>
          <div class="mb-4">
            <h2 class="font-bold text-xl mb-4">Education</h2>
            {profileData.educationHistory.map((education) => {
              return (
                <div key={education.name} class="mb-4">
                  <div class="mb-2">
                    <h3 class="font-bold text-sm leading-tight">
                      {education.title}, {education.name}
                    </h3>
                    <small class="text-black/40 text-[10px]">
                      {formatDate(education.startDate)} - {formatDate(education.endDate)}
                    </small>
                  </div>

                  {education.description && (
                    <p
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: we can trust this description source
                      dangerouslySetInnerHTML={{
                        __html: education.description,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
