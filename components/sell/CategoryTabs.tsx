//  — เปลี่ยนคอลัมน์ขวาผ่าน URL
const router = useRouter();
const cat = useSearchParams().get("cat") ?? "all";

<div className="flex gap-2 overflow-x-auto pb-2">
  {["all", ...categories].map(c => (
    <button key={c.id}
      onClick={() => router.replace(`/sell?cat=${c.id}`, { scroll: false })}
      className={cn("px-4 py-2 rounded-full text-sm whitespace-nowrap",
        cat === c.id ? "bg-slate-900 text-white" : "bg-white border")}>
      {c.name}
    </button>
  ))}
</div>
