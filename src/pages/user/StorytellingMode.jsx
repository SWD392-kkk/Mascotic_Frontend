import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StorytellingMode() {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Story generation states
    const [storyMode, setStoryMode] = useState('idle'); // 'idle' | 'generating' | 'storytelling'
    const [currentStory, setCurrentStory] = useState(null);
    const [storyProgress, setStoryProgress] = useState(0);

    // Voice conversation states
    const [isVoiceMode, setIsVoiceMode] = useState(false);
    const [voiceTranscript, setVoiceTranscript] = useState('');
    const transcriptRef = useRef('');

    // Voice management
    const [availableVoices, setAvailableVoices] = useState([]);
    const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);

    // Initial voice load and selection
    useEffect(() => {
        const loadVoices = () => {
            if ('speechSynthesis' in window) {
                const voices = window.speechSynthesis.getVoices();
                // Filter for all Vietnamese voices or potential candidates
                const viVoices = voices.filter(v => v.lang.includes('vi') || v.name.includes('Vietnamese'));

                if (viVoices.length > 0) {
                    setAvailableVoices(viVoices);
                    // Try to auto-select Google or decent Microsoft voice
                    const googleIdx = viVoices.findIndex(v => v.name.includes('Google'));
                    if (googleIdx >= 0) setSelectedVoiceIndex(googleIdx);
                    else {
                        // Priority fallback
                        const msIdx = viVoices.findIndex(v => v.name.includes('HoaiMy') || v.name.includes('NamMinh'));
                        if (msIdx >= 0) setSelectedVoiceIndex(msIdx);
                    }
                } else {
                    // If no specific VI voice, list all to debug or rely on system
                    // Actually better to just leave empty or show system default if really nothing
                    console.log('No specific VI voices found, using default behavior');
                }
            }
        };

        loadVoices();

        if ('speechSynthesis' in window) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    // Get the currently selected voice object
    const getCurrentVoice = () => {
        if (availableVoices.length > 0 && availableVoices[selectedVoiceIndex]) {
            return availableVoices[selectedVoiceIndex];
        }
        return null;
    };

    const cycleVoice = () => {
        if (availableVoices.length <= 1) return;
        setSelectedVoiceIndex(prev => (prev + 1) % availableVoices.length);
    };

    // Stop speech on unmount or refresh
    useEffect(() => {
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);
    // Trạng thái hội thoại tiếng Việt
    const [chatMessages, setChatMessages] = useState([
        { role: 'mascot', text: 'Chào bạn! Mình là Cosmo, người dẫn đường không gian của bạn! Hãy bấm nút mic và nói chuyện với mình nhé!' }
    ]);

    // Mock phản hồi tiếng Việt
    const voiceResponses = {
        'chào': 'Chào bạn nhé! Rất vui được gặp bạn! Hôm nay bạn muốn khám phá điều gì cùng mình nào?',
        'khỏe không': 'Mình đang cảm thấy rất tuyệt! Sẵn sàng cùng bạn bắt đầu cuộc hành trình vào vũ trụ đây!',
        'hệ mặt trời': 'Hệ Mặt Trời của chúng ta tuyệt đẹp lắm! Có 8 hành tinh quay quanh Mặt Trời. Bạn muốn mình kể về hành tinh nào đầu tiên?',
        'sao hỏa': 'Sao Hỏa được gọi là Hành tinh Đỏ! Nó cách Trái Đất khoảng 225 triệu km. Các nhà khoa học đang tìm cách để con người có thể lên đó sống đấy!',
        'mặt trời': 'Mặt Trời là một quả cầu khí nóng khổng lồ! Nó lớn đến mức có thể chứa được 1.3 triệu Trái Đất bên trong. Nó cung cấp ánh sáng và hơi ấm cho chúng ta!',
        'mặt trăng': 'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất! Nó cách chúng ta khoảng 384,000 km. Con người lần đầu tiên đặt chân lên đó là vào năm 1969!',
        'ngôi sao': 'Các ngôi sao là những quả cầu khí nóng khổng lồ giống như Mặt Trời của chúng ta vậy! Có hàng tỷ tỷ ngôi sao trong vũ trụ rộng lớn này!',
        'cảm ơn': 'Không có gì đâu nè! Rất vui vì được giúp đỡ bạn. Bạn còn thắc mắc gì nữa không?',
        'tạm biệt': 'Tạm biệt nhé! Hẹn gặp lại bạn sớm trong những chuyến hành trình tiếp theo!',
        'default': 'Đó là một câu hỏi rất hay! Để mình suy nghĩ một chút nhé... Vũ trụ bao la có rất nhiều điều kỳ thú để khám phá đấy!'
    };

    const [mascot] = useState({
        name: 'Cosmo',
        role: 'Space Explorer',
        avatar: '🚀'
    });

    const [conversations, setConversations] = useState([
        { id: 1, title: 'Journey to Mars', date: '12 Mar', active: false },
        { id: 2, title: 'Ocean Adventures', date: '10 Feb', active: true },
        { id: 3, title: 'Math Magic', date: '22 Jan', active: false },
        { id: 4, title: 'Space Facts', date: '1 Jan', active: false },
    ]);

    // Mock truyện tiếng Việt
    const mockStories = {
        'hệ mặt trời': {
            title: 'Hành trình xuyên qua Hệ Mặt Trời',
            chapters: [
                { title: 'Cất cánh!', content: 'Chào mừng bạn đến với phi thuyền của mình! Mình là Cosmo, hôm nay chúng ta sẽ cùng bay vào không gian để khám phá Hệ Mặt Trời nhé!' },
                { title: 'Mặt Trời - Ngôi sao của chúng ta', content: 'Điểm dừng chân đầu tiên là trung tâm của mọi thứ - Mặt Trời! Nó tỏa ra ánh sáng và sức nóng cho tất cả các hành tinh xung quanh.' },
                { title: 'Các hành tinh đất đá', content: 'Sao Thủy, Sao Kim, Trái Đất và Sao Hỏa là những hành tinh đất đá. Trái Đất là ngôi nhà xinh đẹp của chúng ta!' },
                { title: 'Những gã khổng lồ khí', content: 'Sao Mộc và Sao Thổ cực kỳ to lớn! Sao Mộc lớn đến mức có thể chứa 1,000 Trái Đất bên trong. Sao Thổ thì có những vòng nhẫn tuyệt đẹp bằng băng.' },
                { title: 'Kết thúc hành trình', content: 'Sao Thiên Vương và Sao Hải Vương ở rất xa và rất lạnh. Và thế là chuyến du hành của chúng ta hôm nay kết thúc rồi! Hẹn gặp lại bạn nhé!' }
            ]
        },
        'quang hợp': {
            title: 'Phép màu của Cây xanh',
            chapters: [
                { title: 'Chào các bạn cây', content: 'Hôm nay chúng ta sẽ khám phá cách cây xanh tự tạo ra thức ăn nhé. Nó giống như một phép thuật vậy, nhưng đó là khoa học!' },
                { title: 'Bắt lấy ánh sáng', content: 'Cây có những chất diệp lục đặc biệt giống như những tấm pin mặt trời nhỏ xíu để bắt lấy ánh nắng!' },
                { title: 'Nước và Không khí', content: 'Cây uống nước qua rễ và hít thở khí CO2 qua những lỗ nhỏ trên lá để chuẩn bị nấu ăn đấy.' },
                { title: 'Nước và Không khí', content: 'Cây uống nước qua rễ và hít thở khí CO2 qua những lỗ nhỏ trên lá để chuẩn bị nấu ăn đấy.' },
                { title: 'Nấu ăn thôi', content: 'Nhờ ánh sáng, nước và CO2, cây tạo ra đường để có năng lượng lớn lên. Quá trình này gọi là Quang hợp.' },
                { title: 'Quà tặng Oxy', content: 'Điều tuyệt nhất là cây nhả ra khí Oxy cho chúng ta thở. Hãy cảm ơn các bạn cây xanh nhé!' }
            ]
        }
    };

    const recognitionRef = useRef(null);

    // Direct Voice Conversation Handler
    const handleDirectVoice = () => {
        if (isListening) {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                setIsListening(false);
            }
            return;
        }

        // Check if browser supports speech recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Chrome hoặc Edge nhé.");
            return;
        }

        // Barge-in: Nếu đang nói thì dừng lại để nghe
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }

        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.lang = 'vi-VN'; // Chuyển sang tiếng Việt
        recognition.interimResults = true;
        recognition.continuous = false;

        recognition.onstart = () => {
            setIsListening(true);
            setIsVoiceMode(true);
            setVoiceTranscript('Đang nghe...');
            transcriptRef.current = '';
        };

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            setVoiceTranscript(transcript);
            transcriptRef.current = transcript;
        };

        recognition.onerror = (event) => {
            console.error(event.error);
            setIsListening(false);
            if (event.error === 'no-speech') {
                setVoiceTranscript('Không nghe thấy gì...');
            } else {
                setVoiceTranscript('Lỗi nhận diện. Thử lại nhé!');
            }
            setTimeout(() => setVoiceTranscript(''), 3000);
        };

        recognition.onend = () => {
            setIsListening(false);
            const finalTranscript = transcriptRef.current;

            // Only process if we have a valid transcript
            if (finalTranscript && finalTranscript.trim().length > 0 && finalTranscript !== 'Đang nghe...' && !finalTranscript.includes('Lỗi')) {
                const userQuery = finalTranscript.toLowerCase();

                // Add to chat history
                setChatMessages(prev => [...prev, { role: 'user', text: finalTranscript }]);

                // Check if user is asking to start a story
                if (userQuery.includes('hệ mặt trời') || userQuery.includes('quang hợp') || userQuery.includes('kể chuyện') || userQuery.includes('học về') || userQuery.includes('sao hỏa') || userQuery.includes('hành tinh')) {
                    setStoryMode('generating');
                    setTimeout(() => {
                        let story = mockStories['hệ mặt trời'];
                        if (userQuery.includes('quang hợp')) story = mockStories['quang hợp'];

                        setCurrentStory(story);
                        setStoryProgress(0);
                        setStoryMode('storytelling');
                        setIsSpeaking(true);

                        if ('speechSynthesis' in window) {
                            window.speechSynthesis.cancel();
                            const utterance = new SpeechSynthesisUtterance(story.chapters[0].content);
                            utterance.lang = 'vi-VN';
                            const viVoice = getCurrentVoice();
                            if (viVoice) utterance.voice = viVoice;
                            utterance.onend = () => setIsSpeaking(false);
                            window.speechSynthesis.speak(utterance);
                        }
                    }, 1500);
                    return;
                }

                // Normal Q&A
                setTimeout(() => {
                    setIsSpeaking(true);
                    let response = voiceResponses['default'];
                    let found = false;
                    for (const [key, value] of Object.entries(voiceResponses)) {
                        if (userQuery.includes(key)) {
                            response = value;
                            found = true;
                            break;
                        }
                    }
                    if (!found && userQuery.includes('thiên văn')) response = 'Thiên văn học thú vị lắm!';

                    setChatMessages(prev => [...prev, { role: 'mascot', text: response }]);
                    setVoiceTranscript(response);

                    if ('speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const utterance = new SpeechSynthesisUtterance(response);
                        utterance.lang = 'vi-VN';
                        const viVoice = getCurrentVoice();
                        if (viVoice) utterance.voice = viVoice;
                        utterance.rate = 1.0;
                        utterance.onend = () => {
                            setIsSpeaking(false);
                            setTimeout(() => setVoiceTranscript(''), 2500);
                        };
                        window.speechSynthesis.speak(utterance);
                    }
                }, 500);
            }
        };

        recognition.start();
    };

    const handleVoiceInput = () => {
        setIsListening(!isListening);
        if (!isListening) {
            setTimeout(() => {
                setInputText('Teach me about the solar system');
                setIsListening(false);
            }, 2000);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Start story generation
        setStoryMode('generating');
        const lessonTopic = inputText.toLowerCase();
        setInputText('');

        // Simulate AI processing
        setTimeout(() => {
            // Find matching story or use default
            let story = mockStories['hệ mặt trời']; // default
            if (lessonTopic.includes('mặt trời') || lessonTopic.includes('hành tinh') || lessonTopic.includes('không gian') || lessonTopic.includes('vũ trụ') || lessonTopic.includes('sao')) {
                story = mockStories['hệ mặt trời'];
            } else if (lessonTopic.includes('cây') || lessonTopic.includes('quang hợp') || lessonTopic.includes('lá') || lessonTopic.includes('oxy')) {
                story = mockStories['quang hợp'];
            }

            setCurrentStory(story);
            setStoryProgress(0);
            setStoryMode('storytelling');
            setIsSpeaking(true);

            // Add to conversations
            const newConv = {
                id: Date.now(),
                title: story.title,
                date: 'Vừa xong',
                active: true
            };
            setConversations(prev => [newConv, ...prev.map(c => ({ ...c, active: false }))]);

            // Speak first chapter
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(story.chapters[0].content);
                utterance.lang = 'vi-VN';
                const viVoice = getCurrentVoice();
                if (viVoice) utterance.voice = viVoice;
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            } else {
                setTimeout(() => setIsSpeaking(false), 4000);
            }
        }, 2000);
    };

    const nextChapter = () => {
        if (currentStory && storyProgress < currentStory.chapters.length - 1) {
            const nextIdx = storyProgress + 1;
            setStoryProgress(nextIdx);
            setIsSpeaking(true);

            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(currentStory.chapters[nextIdx].content);
                utterance.lang = 'vi-VN';
                const viVoice = getCurrentVoice();
                if (viVoice) utterance.voice = viVoice;
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            } else {
                setTimeout(() => setIsSpeaking(false), 4000);
            }
        }
    };

    const prevChapter = () => {
        if (storyProgress > 0) {
            const prevIdx = storyProgress - 1;
            setStoryProgress(prevIdx);
            setIsSpeaking(true);

            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(currentStory.chapters[prevIdx].content);
                utterance.lang = 'vi-VN';
                const viVoice = getCurrentVoice();
                if (viVoice) utterance.voice = viVoice;
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            } else {
                setTimeout(() => setIsSpeaking(false), 4000);
            }
        }
    };

    const resetStory = () => {
        setStoryMode('idle');
        setCurrentStory(null);
        setStoryProgress(0);
        setUploadedFile(null);
    };

    // File upload state
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isProcessingFile, setIsProcessingFile] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
        const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            alert('Please upload a PDF, DOC, DOCX, or TXT file');
            return;
        }

        setUploadedFile(file);
        setIsProcessingFile(true);
        setStoryMode('generating');

        // Mock file processing - simulate AI reading and converting to story
        setTimeout(() => {
            // Generate story based on filename (mock)
            const fileName = file.name.toLowerCase();
            let story;

            if (fileName.includes('solar') || fileName.includes('space') || fileName.includes('planet')) {
                story = mockStories['solar system'];
            } else if (fileName.includes('plant') || fileName.includes('bio') || fileName.includes('science')) {
                story = mockStories['photosynthesis'];
            } else if (fileName.includes('math') || fileName.includes('number')) {
                story = mockStories['multiplication'];
            } else {
                // Default: create a custom story based on filename
                story = {
                    title: `Story: ${file.name.replace(/\.[^/.]+$/, '')}`,
                    chapters: [
                        { title: 'Introduction', content: `Welcome! I've analyzed your file "${file.name}" and created an engaging story for you!` },
                        { title: 'Key Concepts', content: 'Let me break down the main ideas from your document into easy-to-understand concepts...' },
                        { title: 'Deep Dive', content: 'Now let\'s explore these concepts in more detail with fun examples and analogies!' },
                        { title: 'Real World Applications', content: 'Here\'s how these ideas apply to the real world and why they matter...' },
                        { title: 'Summary', content: 'Great job! You\'ve learned all the key points. Keep exploring and stay curious!' }
                    ]
                };
            }

            setCurrentStory(story);
            setStoryProgress(0);
            setStoryMode('storytelling');
            setIsSpeaking(true);
            setIsProcessingFile(false);

            // Add to conversations
            const newConv = {
                id: Date.now(),
                title: `📄 ${file.name.replace(/\.[^/.]+$/, '')}`,
                date: 'Just now',
                active: true
            };
            setConversations(prev => [newConv, ...prev.map(c => ({ ...c, active: false }))]);

            setTimeout(() => setIsSpeaking(false), 4000);
        }, 3000);
    };


    // Styles
    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            backgroundColor: '#0f172a',
            color: '#e2e8f0'
        },
        sidebar: {
            width: '260px',
            height: '100vh',
            backgroundColor: '#0f172a',
            borderRight: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '32px',
            flexShrink: 0
        },
        sidebarHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            marginBottom: '32px'
        },
        logo: {
            width: '28px',
            height: '28px',
            color: '#3b82f6'
        },
        sidebarTitle: {
            marginLeft: '16px',
            fontSize: '18px',
            fontWeight: '500'
        },
        badge: {
            marginLeft: '8px',
            backgroundColor: '#3b82f6',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontSize: '12px'
        },
        newChatBtn: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: 'calc(100% - 16px)',
            margin: '0 8px',
            padding: '16px',
            backgroundColor: 'transparent',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#e2e8f0',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left'
        },
        chatList: {
            flex: 1,
            overflowY: 'auto',
            padding: '16px 8px',
            borderBottom: '1px solid #334155'
        },
        chatItem: {
            display: 'block',
            width: '100%',
            padding: '8px 12px',
            marginBottom: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            color: '#e2e8f0',
            textAlign: 'left',
            cursor: 'pointer'
        },
        chatItemActive: {
            backgroundColor: '#1e293b'
        },
        chatTitle: {
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '4px'
        },
        chatDate: {
            fontSize: '12px',
            color: '#64748b'
        },
        sidebarFooter: {
            padding: '16px 8px',
            marginTop: 'auto'
        },
        footerBtn: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            padding: '8px 12px',
            marginBottom: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            color: '#e2e8f0',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left'
        },
        main: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            position: 'relative',
            overflow: 'hidden'
        },
        spaceBackground: {
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at bottom, #1B2838 0%, #0f172a 100%)',
            zIndex: 0
        },
        nebula1: {
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
        },
        nebula2: {
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
        },
        modelArea: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
        },
        modelContainer: {
            textAlign: 'center'
        },
        modelCircle: {
            width: '200px',
            height: '200px',
            margin: '0 auto 24px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
            animation: isSpeaking ? 'pulse 2s ease-in-out infinite' : 'none'
        },
        modelEmoji: {
            fontSize: '80px'
        },
        modelName: {
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '8px'
        },
        modelRole: {
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
        },
        statusDot: {
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: isSpeaking ? '#22c55e' : '#64748b',
            animation: isSpeaking ? 'pulse 1s ease-in-out infinite' : 'none'
        },
        waveform: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            marginTop: '16px'
        },
        waveBar: {
            width: '4px',
            backgroundColor: '#3b82f6',
            borderRadius: '4px'
        },
        inputArea: {
            padding: '16px 24px 24px'
        },
        inputForm: {
            maxWidth: '768px',
            margin: '0 auto'
        },
        inputWrapper: {
            position: 'relative'
        },
        voiceBtn: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'transparent',
            border: 'none',
            color: isListening ? '#ef4444' : '#64748b',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        textarea: {
            width: '100%',
            padding: '16px 100px 16px 48px',
            backgroundColor: '#1e293b',
            border: 'none',
            borderRadius: '12px',
            color: '#e2e8f0',
            fontSize: '16px',
            resize: 'none',
            outline: 'none'
        },
        sendBtn: {
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#3b82f6',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.container}>
            {/* Sidebar */}
            <aside style={styles.sidebar}>
                <div style={styles.sidebarHeader}>
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/dashboard')}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#94a3b8',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: '8px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    {/* Mascotic Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {/* Purple icon box with sparkle */}
                        <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#8b5cf6',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                                <path d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25L19 15Z" opacity="0.7" />
                                <path d="M5 15L5.5 16.5L7 17L5.5 17.5L5 19L4.5 17.5L3 17L4.5 16.5L5 15Z" opacity="0.7" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#8b5cf6', letterSpacing: '1px' }}>MASCOTIC</div>
                            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '-2px' }}>AI Meta Human for Education</div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '0 16px', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '0' }}>
                        Chats
                        <span style={styles.badge}>{conversations.length}</span>
                    </h3>
                </div>


                <button
                    style={styles.newChatBtn}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1e293b'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    New Chat
                </button>

                <div style={styles.chatList}>
                    {conversations.map((conv) => (
                        <button
                            key={conv.id}
                            style={{
                                ...styles.chatItem,
                                ...(conv.active ? styles.chatItemActive : {})
                            }}
                            onMouseEnter={(e) => !conv.active && (e.currentTarget.style.backgroundColor = '#1e293b')}
                            onMouseLeave={(e) => !conv.active && (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                            <div style={styles.chatTitle}>{conv.title}</div>
                            <div style={styles.chatDate}>{conv.date}</div>
                        </button>
                    ))}
                </div>

                <div style={styles.sidebarFooter}>
                    <button
                        style={styles.footerBtn}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        User
                    </button>
                    <button
                        style={styles.footerBtn}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        Settings
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={styles.main}>
                {/* Space Background */}
                <div style={styles.spaceBackground}>
                    {/* Nebula effects */}
                    <div style={styles.nebula1}></div>
                    <div style={styles.nebula2}></div>

                    {/* Stars */}
                    {[...Array(60)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: Math.random() > 0.7 ? '3px' : '2px',
                                height: Math.random() > 0.7 ? '3px' : '2px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: 0.3 + Math.random() * 0.7,
                                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`
                            }}
                        />
                    ))}
                </div>

                {/* 3D Model Area */}
                <div style={styles.modelArea}>
                    <div style={styles.modelContainer}>
                        {/* Mascot Avatar */}
                        <div style={styles.modelCircle}>
                            <span style={styles.modelEmoji}>{mascot.avatar}</span>
                        </div>

                        {/* Idle State - Welcome message */}
                        {storyMode === 'idle' && (
                            <>
                                <h2 style={styles.modelName}>{mascot.name}</h2>
                                <p style={styles.modelRole}>
                                    <span style={styles.statusDot}></span>
                                    {isListening ? 'Đang lắng nghe...' : isSpeaking ? 'Đang trả lời...' : 'Sẵn sàng khám phá'}
                                </p>

                                {/* Voice Transcript Display */}
                                {voiceTranscript && (
                                    <div style={{
                                        marginTop: '16px',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        padding: '12px 20px',
                                        backgroundColor: isListening ? 'rgba(239, 68, 68, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                                        border: `1px solid ${isListening ? 'rgba(239, 68, 68, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                                        borderRadius: '12px',
                                        maxWidth: '450px'
                                    }}>
                                        <p style={{
                                            color: isListening ? '#f87171' : '#a78bfa',
                                            fontSize: '15px',
                                            margin: 0,
                                            fontStyle: isListening ? 'italic' : 'normal'
                                        }}>
                                            {isListening ? '🎤 ' : '💬 '}{voiceTranscript}
                                        </p>
                                    </div>
                                )}

                                {/* Voice Source Toggle */}
                                {availableVoices.length > 0 ? (
                                    <div style={{ marginTop: '12px', textAlign: 'center' }}>
                                        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                                            Giọng đọc: {availableVoices[selectedVoiceIndex]?.name || 'Mặc định'}
                                        </p>
                                        <button
                                            onClick={cycleVoice}
                                            style={{
                                                fontSize: '11px',
                                                color: '#8b5cf6',
                                                background: 'transparent',
                                                border: '1px solid #8b5cf6',
                                                borderRadius: '4px',
                                                padding: '2px 8px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Đổi giọng ↻
                                        </button>
                                    </div>
                                ) : (
                                    <div style={{ marginTop: '12px', textAlign: 'center', maxWidth: '300px', marginInline: 'auto' }}>
                                        <p style={{ fontSize: '12px', color: '#f59e0b', marginBottom: '4px' }}>
                                            ⚠️ Chưa tìm thấy giọng Tiếng Việt.
                                        </p>
                                        <p style={{ fontSize: '11px', color: '#94a3b8' }}>
                                            Vui lòng vào Settings máy tính &gt; Time & Language &gt; Speech &gt; cài gói "Vietnamese".
                                        </p>
                                    </div>
                                )}

                                {/* Big Voice Button */}
                                <button
                                    onClick={handleDirectVoice}
                                    style={{
                                        marginTop: '24px',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: isListening ? '#ef4444' : '#8b5cf6',
                                        color: 'white',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: isListening
                                            ? '0 0 0 8px rgba(239, 68, 68, 0.2), 0 0 30px rgba(239, 68, 68, 0.4)'
                                            : '0 0 0 8px rgba(139, 92, 246, 0.2), 0 0 30px rgba(139, 92, 246, 0.3)',
                                        transition: 'all 0.3s ease',
                                        animation: isListening ? 'pulse 1.5s ease-in-out infinite' : 'none'
                                    }}
                                >
                                    {isListening ? (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <rect x="6" y="6" width="12" height="12" rx="2" />
                                        </svg>
                                    ) : (
                                        <svg width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                            <line x1="12" y1="19" x2="12" y2="23" />
                                            <line x1="8" y1="23" x2="16" y2="23" />
                                        </svg>
                                    )}
                                </button>
                                <p style={{ color: '#64748b', fontSize: '13px', marginTop: '12px' }}>
                                    {isListening ? 'Tap to stop' : 'Tap to talk with me!'}
                                </p>

                                {/* Hint Box */}
                                <div style={{
                                    marginTop: '20px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    padding: '12px 20px',
                                    backgroundColor: 'rgba(139, 92, 246, 0.05)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(139, 92, 246, 0.15)',
                                    maxWidth: '400px'
                                }}>
                                    <p style={{ color: '#64748b', fontSize: '12px', margin: 0 }}>
                                        💡 Or type a lesson topic below to generate a story
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Generating State - Loading */}
                        {storyMode === 'generating' && (
                            <>
                                <h2 style={styles.modelName}>Creating your story...</h2>
                                <p style={{ ...styles.modelRole, color: '#a78bfa' }}>
                                    <span style={{ ...styles.statusDot, backgroundColor: '#a78bfa', animation: 'pulse 1s ease-in-out infinite' }}></span>
                                    Generating story arc
                                </p>
                                <div style={{ marginTop: '24px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: '12px',
                                                height: '12px',
                                                backgroundColor: '#8b5cf6',
                                                borderRadius: '50%',
                                                animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Storytelling State - Show story */}
                        {storyMode === 'storytelling' && currentStory && (
                            <>
                                <h2 style={{ ...styles.modelName, fontSize: '20px' }}>{mascot.name}</h2>
                                <p style={styles.modelRole}>
                                    <span style={{ ...styles.statusDot, backgroundColor: isSpeaking ? '#10b981' : '#64748b' }}></span>
                                    {isSpeaking ? 'Đang kể chuyện...' : 'Sẵn sàng'}
                                </p>

                                {/* Voice Transcript in Story Mode */}
                                {voiceTranscript && (
                                    <div style={{
                                        marginTop: '12px',
                                        padding: '8px 16px',
                                        backgroundColor: isListening ? 'rgba(239, 68, 68, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                                        border: `1px solid ${isListening ? 'rgba(239, 68, 68, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                                        borderRadius: '10px',
                                        maxWidth: '450px',
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }}>
                                        <p style={{ color: isListening ? '#f87171' : '#a78bfa', fontSize: '14px', margin: 0 }}>
                                            {isListening ? '🎤 Đang nghe: ' : '💬 '}{voiceTranscript}
                                        </p>
                                    </div>
                                )}

                                {/* Story Card */}
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                                    borderRadius: '16px',
                                    border: '1px solid #334155',
                                    maxWidth: '500px',
                                    textAlign: 'left',
                                    position: 'relative'
                                }}>
                                    {/* Barge-in Voice Button */}
                                    <button
                                        onClick={handleDirectVoice}
                                        style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '20px',
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            backgroundColor: isListening ? '#ef4444' : '#8b5cf6',
                                            border: '4px solid #0f172a',
                                            color: 'white',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                            zIndex: 2,
                                            animation: isListening ? 'pulse 1.5s infinite' : 'none'
                                        }}
                                        title="Bấm để nói chuyện với Cosmo"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                        </svg>
                                    </button>

                                    {/* Story Title */}
                                    <div style={{
                                        fontSize: '11px',
                                        color: '#8b5cf6',
                                        fontWeight: '700',
                                        marginBottom: '6px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1.5px'
                                    }}>
                                        {currentStory.title}
                                    </div>

                                    {/* Chapter Title */}
                                    <h3 style={{
                                        fontSize: '18px',
                                        color: '#e2e8f0',
                                        margin: '0 0 12px 0',
                                        fontWeight: '600'
                                    }}>
                                        Chương {storyProgress + 1}: {currentStory.chapters[storyProgress].title}
                                    </h3>

                                    {/* Chapter Content */}
                                    <p style={{
                                        fontSize: '15px',
                                        color: '#cbd5e1',
                                        lineHeight: '1.7',
                                        margin: 0
                                    }}>
                                        "{currentStory.chapters[storyProgress].content}"
                                    </p>

                                    {/* Progress */}
                                    <div style={{ marginTop: '20px' }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '8px'
                                        }}>
                                            <span style={{ fontSize: '12px', color: '#64748b' }}>
                                                Tiến độ
                                            </span>
                                            <span style={{ fontSize: '12px', color: '#64748b' }}>
                                                {storyProgress + 1} / {currentStory.chapters.length}
                                            </span>
                                        </div>
                                        <div style={{
                                            height: '4px',
                                            backgroundColor: '#1e293b',
                                            borderRadius: '2px',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                height: '100%',
                                                width: `${((storyProgress + 1) / currentStory.chapters.length) * 100}%`,
                                                backgroundColor: '#8b5cf6',
                                                borderRadius: '2px',
                                                transition: 'width 0.4s ease'
                                            }}></div>
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: '20px',
                                        justifyContent: 'center'
                                    }}>
                                        <button
                                            onClick={prevChapter}
                                            disabled={storyProgress === 0}
                                            style={{
                                                padding: '8px 20px',
                                                backgroundColor: storyProgress === 0 ? '#1e293b' : '#334155',
                                                border: 'none',
                                                borderRadius: '8px',
                                                color: storyProgress === 0 ? '#475569' : '#e2e8f0',
                                                fontSize: '13px',
                                                cursor: storyProgress === 0 ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            ← Trước đó
                                        </button>
                                        <button
                                            onClick={nextChapter}
                                            disabled={storyProgress === currentStory.chapters.length - 1}
                                            style={{
                                                padding: '8px 20px',
                                                backgroundColor: storyProgress === currentStory.chapters.length - 1 ? '#1e293b' : '#8b5cf6',
                                                border: 'none',
                                                borderRadius: '8px',
                                                color: storyProgress === currentStory.chapters.length - 1 ? '#475569' : 'white',
                                                fontSize: '13px',
                                                cursor: storyProgress === currentStory.chapters.length - 1 ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            Tiếp theo →
                                        </button>
                                    </div>

                                    {/* New Story Button */}
                                    {storyProgress === currentStory.chapters.length - 1 && (
                                        <button
                                            onClick={resetStory}
                                            style={{
                                                marginTop: '12px',
                                                padding: '12px 20px',
                                                backgroundColor: 'transparent',
                                                border: '1px solid #8b5cf6',
                                                borderRadius: '8px',
                                                color: '#8b5cf6',
                                                fontSize: '13px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                width: '100%',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                            }}
                                        >
                                            ✨ Bắt đầu câu chuyện mới
                                        </button>
                                    )}
                                </div>
                            </>
                        )}


                        {isSpeaking && (
                            <div style={styles.waveform}>
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            ...styles.waveBar,
                                            height: `${20 + Math.random() * 20}px`,
                                            animation: `wave 0.5s ease-in-out ${i * 0.1}s infinite alternate`
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Input Area */}
                <div style={styles.inputArea}>
                    {/* File Upload Status */}
                    {uploadedFile && (
                        <div style={{
                            maxWidth: '768px',
                            margin: '0 auto 12px',
                            padding: '10px 16px',
                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#8b5cf6">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14,2 14,8 20,8" stroke="#8b5cf6" fill="none" strokeWidth="2" />
                            </svg>
                            <span style={{ color: '#a78bfa', fontSize: '13px' }}>
                                {isProcessingFile ? 'Processing: ' : 'Uploaded: '}{uploadedFile.name}
                            </span>
                            {!isProcessingFile && (
                                <button
                                    onClick={() => setUploadedFile(null)}
                                    style={{
                                        marginLeft: 'auto',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: '#64748b',
                                        cursor: 'pointer',
                                        padding: '4px'
                                    }}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={styles.inputForm}>
                        <div style={styles.inputWrapper}>
                            {/* Voice Input Button */}
                            <button
                                type="button"
                                onClick={handleVoiceInput}
                                style={styles.voiceBtn}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                                    <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
                                    <path d="M5 10a7 7 0 0 0 14 0" />
                                    <path d="M8 21l8 0" />
                                    <path d="M12 17l0 4" />
                                </svg>
                            </button>

                            {/* Text Input */}
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleSubmit(e);
                                    }
                                }}
                                style={{ ...styles.textarea, paddingRight: '140px' }}
                                placeholder={isListening ? "Đang nghe..." : "Nhập chủ đề bài học hoặc tải tệp lên..."}
                            />

                            {/* File Upload Button */}
                            <label style={{
                                position: 'absolute',
                                right: '90px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#334155',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#e2e8f0',
                                padding: '8px 10px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                transition: 'background-color 0.2s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475569'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#334155'}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17,8 12,3 7,8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx,.txt"
                                    onChange={handleFileUpload}
                                    style={{ display: 'none' }}
                                />
                            </label>

                            {/* Send Button */}
                            <button type="submit" style={{ ...styles.sendBtn, right: '10px', padding: '10px 16px' }}>
                                Gửi
                            </button>
                        </div>
                    </form>

                    {/* Helper Text */}
                    <p style={{
                        textAlign: 'center',
                        fontSize: '12px',
                        color: '#64748b',
                        marginTop: '12px'
                    }}>
                        📝 Type a lesson topic or 📄 Upload PDF/DOC/TXT file
                    </p>
                </div>
            </main>

            {/* Animations */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.02); }
                }
                @keyframes wave {
                    from { transform: scaleY(0.5); }
                    to { transform: scaleY(1.5); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
}
