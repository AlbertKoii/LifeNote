import axios from "axios";
import { useState, useEffect } from "react";
import NoteInputCard from "./commonPage/NoteInputCard";

const Note: React.FC = () => {
  const [inner, setInner] = useState<any[]>([]);
  const [showNoteInputCard, setShowNoteInputCard] = useState(false);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/accounts/1');
      if (response.status === 200 && response.data) {
        setInner(response.data.date);
      }
    } catch (error) {
      console.error("获取笔记时出错:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNoteData = (newNote) => {
    setInner((prevNotes) => [...prevNotes, newNote]); // 更新状态以包含新笔记
  };

  const handleClose = () => {
    setShowNoteInputCard(false); // 隐藏输入卡片
  };

  return (
    <div className="mt-20 ml-10 mr-10">
      <div className="mb-10">
        <button 
          className="border-gray-950 border-2 rounded-3xl p-3 mr-2"
          onClick={() => setShowNoteInputCard(true)}
        >
          新增記事
        </button>
        
        <button 
          className="border-gray-950 border-2 rounded-3xl p-3"
          onClick={() => console.log('刪除記事按鈕被點擊')}
        >
          刪除記事
        </button>
      </div>

      {showNoteInputCard && (
        <NoteInputCard 
          onSubmit={handleAddNoteData}
          onClose={handleClose}
        />
      )}

      <div className="border">
        {inner.length > 0 ? (
          inner.map((item, index) => (
            <div key={index} className="mb-4">
              {item.noteID && (
                <div>
                  <div className="mb-2">{new Date(item.noteID.noteDate).toLocaleString()}</div>
                  <div>{item.noteID.noteInner}</div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>无法加载数据，请稍后再试。</div>
        )}
      </div>
    </div>
  );
};

export default Note