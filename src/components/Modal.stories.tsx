import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Alert, Confirm, ImagePopup } from "./Modal";
import { Button } from "./Button";

const meta: Meta = {
  title: "Feedback/Modal",
  tags: ["autodocs"],
};

export default meta;

export const AlertModal: StoryObj = {
  render: function AlertModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Alert 열기</Button>
        <Alert
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="알림"
          message="작업이 완료되었습니다."
        />
      </div>
    );
  },
};

export const AlertCustomText: StoryObj = {
  render: function AlertCustomTextStory() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>커스텀 Alert</Button>
        <Alert
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="저장 완료"
          message="변경사항이 저장되었습니다."
          confirmText="확인했습니다"
        />
      </div>
    );
  },
};

export const ConfirmModal: StoryObj = {
  render: function ConfirmModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    return (
      <div className="space-y-2">
        <Button onClick={() => setIsOpen(true)}>Confirm 열기</Button>
        {result && <p className="text-sm text-gray-500">결과: {result}</p>}
        <Confirm
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setResult("취소됨");
          }}
          onConfirm={() => {
            setResult("확인됨");
          }}
          title="확인"
          message="이 작업을 진행하시겠습니까?"
        />
      </div>
    );
  },
};

export const ConfirmDanger: StoryObj = {
  render: function ConfirmDangerStory() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="danger" onClick={() => setIsOpen(true)}>삭제하기</Button>
        <Confirm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
          title="삭제 확인"
          message="정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
          variant="danger"
          confirmText="삭제"
          cancelText="취소"
        />
      </div>
    );
  },
};

export const ConfirmCustomText: StoryObj = {
  render: function ConfirmCustomTextStory() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>로그아웃</Button>
        <Confirm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
          title="로그아웃"
          message="정말 로그아웃 하시겠습니까?"
          confirmText="로그아웃"
          cancelText="머무르기"
        />
      </div>
    );
  },
};

export const ImagePopupModal: StoryObj = {
  render: function ImagePopupModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-zoom-in"
        >
          <img
            src="https://picsum.photos/200/150"
            alt="썸네일"
            className="w-48 h-36 object-cover border border-gray-200"
          />
        </button>
        <ImagePopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          src="https://picsum.photos/800/600"
          alt="확대 이미지"
        />
      </div>
    );
  },
};

export const Gallery: StoryObj = {
  render: function GalleryStory() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const images = [
      "https://picsum.photos/seed/1/800/600",
      "https://picsum.photos/seed/2/800/600",
      "https://picsum.photos/seed/3/800/600",
      "https://picsum.photos/seed/4/800/600",
    ];

    return (
      <div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(src)}
              className="cursor-zoom-in"
            >
              <img
                src={src}
                alt={`이미지 ${index + 1}`}
                className="w-full aspect-square object-cover border border-gray-200"
              />
            </button>
          ))}
        </div>
        {selectedImage && (
          <ImagePopup
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            src={selectedImage}
            alt="확대 이미지"
          />
        )}
      </div>
    );
  },
};

export const AllModals: StoryObj = {
  render: function AllModalsStory() {
    const [showAlert, setShowAlert] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showDangerConfirm, setShowDangerConfirm] = useState(false);
    const [showImage, setShowImage] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setShowAlert(true)}>Alert</Button>
          <Button variant="outline" onClick={() => setShowConfirm(true)}>Confirm</Button>
          <Button variant="danger" onClick={() => setShowDangerConfirm(true)}>Danger Confirm</Button>
          <Button variant="secondary" onClick={() => setShowImage(true)}>Image Popup</Button>
        </div>

        <Alert
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
          title="알림"
          message="작업이 완료되었습니다."
        />

        <Confirm
          isOpen={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={() => setShowConfirm(false)}
          title="확인"
          message="이 작업을 진행하시겠습니까?"
        />

        <Confirm
          isOpen={showDangerConfirm}
          onClose={() => setShowDangerConfirm(false)}
          onConfirm={() => setShowDangerConfirm(false)}
          title="삭제 확인"
          message="정말 삭제하시겠습니까?"
          variant="danger"
        />

        <ImagePopup
          isOpen={showImage}
          onClose={() => setShowImage(false)}
          src="https://picsum.photos/800/600"
          alt="샘플 이미지"
        />
      </div>
    );
  },
};
