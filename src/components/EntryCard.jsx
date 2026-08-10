export function EntryCard({children, onRemove, entryId}) {
    return (
        <div className="entry-card">
            <button onClick={() => onRemove(entryId)}>Delete</button>
            {children}
        </div>
    );
}