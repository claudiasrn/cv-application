export function EntryCard({children, removeEntry, entryId}) {
    return (
        <div className="entry-card">
            <button onClick={() => removeEntry(entryId)}>Delete</button>
            {children}
        </div>
    );
}