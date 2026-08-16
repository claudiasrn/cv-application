import { Trash2 } from "lucide-react";

export function EntryCard({children, removeEntry, entryId}) {
    return (
        <div className="entry-card">
            <button onClick={() => removeEntry(entryId)}><Trash2/></button>
            {children}
        </div>
    );
}